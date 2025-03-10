"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations
from typing import Optional

class Domain:
    r"""A domain object contains several tenants; it can be considered a group of tenants. The PhantAuth official tenants are collected in a domain identified by `phantauth.net`.
    In the `phantauth.cf` domain, you can share and register your own tenants as well.
    
    A domain can also be used as a tenant, that is, it has an issuer endpoint and some resource endpoints. The issuer URL of the domain is in `https://phantauth.net/_{domain}` format, where `domain` is the fully qualified DNS name associated with the domain, that is, for example [https://phantauth.net/_phantauth.net](https://phantauth.net/_phantauth.net) or
    [https://phantauth.net/_phantauth.cf](https://phantauth.net/_phantauth.cf). When using a default domain (phantauth.net), the domain name, that is, the URL of the default domain issuer, [https://phantauth.net/_](https://phantauth.net/_) can be omitted.
    """
    _client: requests_http.Session
    _security_client: requests_http.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests_http.Session, security_client: requests_http.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version
        
    def get_domain_domainname_(self, request: operations.GetDomainDomainnameRequest) -> operations.GetDomainDomainnameResponse:
        r"""Get a Domain
        This endpoint allows you to get the data of a given PhantAuth domain. To use the PhantAuth services, you don't need this endpoint.
        It is, therefore, mainly used for debug/diagnostic purposes in tenant customization.
        
        Domainname is the fully qualified DNS name of the domain you get (e.g. *phantauth.net* or *phantauth.cf*).
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.GetDomainDomainnameRequest, base_url, '/domain/{domainname}', request)
        
        
        client = self._client
        
        http_res = client.request('GET', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetDomainDomainnameResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.GetDomainDomainname200ApplicationJSON])
                res.get_domain_domainname_200_application_json_object = out

        return res

    