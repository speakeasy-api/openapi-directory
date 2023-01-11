import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Repertoire:
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

    
    def repertoire(self, request: operations.RepertoireRequest) -> operations.RepertoireResponse:
        r"""Gestion repertoire (modification)
        Ajoute ou supprime une liste de numéros à un répertoire existant.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/repertoire"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RepertoireResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RepertoirEmodifreponse])
                res.repertoir_emodifreponse = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Erreur])
                res.erreur = out

        return res

    
    def repertoire_crea(self, request: operations.RepertoireCreaRequest) -> operations.RepertoireCreaResponse:
        r"""Gestion repertoire (creation)
        Cree un nouveau répertoire et retourne son identifiant. Cet identifiant pourra être utilisé pour ajouter ou supprimer des numéros via l'API.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/repertoire"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RepertoireCreaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RepertoirEcreatereponse])
                res.repertoir_ecreatereponse = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Erreur])
                res.erreur = out

        return res

    