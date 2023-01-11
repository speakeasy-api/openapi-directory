import requests
from sdk.models import operations
from . import utils

class Agr:
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

    
    def get_affected_genomic_models_using_get(self, request: operations.GetAffectedGenomicModelsUsingGetRequest) -> operations.GetAffectedGenomicModelsUsingGetResponse:
        r"""Get affected genomic models (rat strains with gene alleles) submitted by RGD to AGR by taxonId
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/agr/affectedGenomicModels/{taxonId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAffectedGenomicModelsUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_alleles_for_taxon_using_get(self, request: operations.GetAllelesForTaxonUsingGetRequest) -> operations.GetAllelesForTaxonUsingGetResponse:
        r"""Get gene allele records submitted by RGD to AGR by taxonId
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/agr/alleles/{taxonId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllelesForTaxonUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_expression_for_taxon_using_get(self, request: operations.GetExpressionForTaxonUsingGetRequest) -> operations.GetExpressionForTaxonUsingGetResponse:
        r"""Get expression annotations submitted by RGD to AGR by taxonId
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/agr/expression/{taxonId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetExpressionForTaxonUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_genes_for_latest_assembly_using_get(self, request: operations.GetGenesForLatestAssemblyUsingGetRequest) -> operations.GetGenesForLatestAssemblyUsingGetResponse:
        r"""Get gene records submitted by RGD to AGR by taxonId
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/agr/{taxonId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenesForLatestAssemblyUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_phenotypes_for_taxon_using_get(self, request: operations.GetPhenotypesForTaxonUsingGetRequest) -> operations.GetPhenotypesForTaxonUsingGetResponse:
        r"""Get phenotype annotations submitted by RGD to AGR by taxonId
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/agr/phenotypes/{taxonId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPhenotypesForTaxonUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_variants_for_taxon_using_get(self, request: operations.GetVariantsForTaxonUsingGetRequest) -> operations.GetVariantsForTaxonUsingGetResponse:
        r"""Get basic variant records submitted by RGD to AGR by taxonId
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/agr/variants/{taxonId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVariantsForTaxonUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    