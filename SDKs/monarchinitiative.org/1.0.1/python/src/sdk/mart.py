import requests
from sdk.models import operations
from . import utils

class Mart:
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

    
    def get_mart_case_associations_resource(self, request: operations.GetMartCaseAssociationsResourceRequest) -> operations.GetMartCaseAssociationsResourceResponse:
        r"""Bulk download of case associations
        NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mart/case/{object_category}/{taxon}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMartCaseAssociationsResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_mart_disease_associations_resource(self, request: operations.GetMartDiseaseAssociationsResourceRequest) -> operations.GetMartDiseaseAssociationsResourceResponse:
        r"""Bulk download of disease associations
        NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mart/disease/{object_category}/{taxon}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMartDiseaseAssociationsResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_mart_gene_associations_resource(self, request: operations.GetMartGeneAssociationsResourceRequest) -> operations.GetMartGeneAssociationsResourceResponse:
        r"""Bulk download of gene associations
        NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mart/gene/{object_category}/{taxon}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMartGeneAssociationsResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_mart_ortholog_associations_resource(self, request: operations.GetMartOrthologAssociationsResourceRequest) -> operations.GetMartOrthologAssociationsResourceResponse:
        r"""Bulk download of orthologs
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mart/ortholog/{taxon1}/{taxon2}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMartOrthologAssociationsResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_mart_paralog_associations_resource(self, request: operations.GetMartParalogAssociationsResourceRequest) -> operations.GetMartParalogAssociationsResourceResponse:
        r"""Bulk download of paralogs
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mart/paralog/{taxon1}/{taxon2}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMartParalogAssociationsResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    