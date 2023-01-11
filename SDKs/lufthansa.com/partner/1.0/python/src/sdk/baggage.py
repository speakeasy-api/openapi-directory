import requests
from sdk.models import operations
from . import utils

class Baggage:
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

    
    def baggage_trip_and_contact(self, request: operations.BaggageTripAndContactRequest) -> operations.BaggageTripAndContactResponse:
        r"""Baggage Trip and Contact
        Retrieve passenger trip, contact and baggage details. This service is only accessible for LH privileged partners
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/baggage/baggagetripandcontact/{searchID}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BaggageTripAndContactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.baggage_trip_and_contact_200_application_json_string = r.content

        return res

    