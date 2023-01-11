import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Campagne:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def get_campagne(self, request: operations.GetCampagneRequest) -> operations.GetCampagneResponse:
        r"""Retourne les SMS envoyés sur une période donnée
        Retourne les SMS envoyés sur une période donnée en fonction d'une date de début et d'une date de fin. 
        
        Les dates sont au format YYYY-MM-DD hh:mm. 
        
        Le fichier rapport de campagne est sous la forme d'un fichier zip + contenant un fichier csv contenant le détail des envois.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/campagne"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCampagneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bytes])
                res.get_campagne_200_application_json_binary_string = out
            if utils.match_content_type(content_type, "file"):
                res.get_campagne_200_file_binary_string = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Erreur])
                res.erreur = out
            if utils.match_content_type(content_type, "file"):
                res.body = r.content

        return res

    