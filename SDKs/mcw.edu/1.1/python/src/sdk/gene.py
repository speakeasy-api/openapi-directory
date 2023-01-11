import requests
from sdk.models import operations
from . import utils

class Gene:
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

    
    def get_all_annotated_genes_using_get(self, request: operations.GetAllAnnotatedGenesUsingGetRequest) -> operations.GetAllAnnotatedGenesUsingGetResponse:
        r"""Return a list of genes annotated to an ontology term
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/genes/annotation/{accId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllAnnotatedGenesUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_annotated_genes_using_post(self, request: operations.GetAnnotatedGenesUsingPostRequest) -> operations.GetAnnotatedGenesUsingPostResponse:
        r"""Return a list of genes annotated to an ontology term
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/genes/annotation"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnnotatedGenesUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 201:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_gene_alleles_using_get(self, request: operations.GetGeneAllelesUsingGetRequest) -> operations.GetGeneAllelesUsingGetResponse:
        r"""Return a list of gene alleles
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/genes/allele/{rgdId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeneAllelesUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_gene_by_map_key_using_get(self, request: operations.GetGeneByMapKeyUsingGetRequest) -> operations.GetGeneByMapKeyUsingGetResponse:
        r"""Return a list of all genes with position information for an assembly
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/genes/map/{mapKey}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeneByMapKeyUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_gene_by_rgd_id_using_get(self, request: operations.GetGeneByRgdIDUsingGetRequest) -> operations.GetGeneByRgdIDUsingGetResponse:
        r"""Get a gene record by RGD ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/genes/{rgdId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeneByRgdIDUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_gene_by_symbol_using_get(self, request: operations.GetGeneBySymbolUsingGetRequest) -> operations.GetGeneBySymbolUsingGetResponse:
        r"""Get a gene record by symbol and species type key
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/genes/{symbol}/{speciesTypeKey}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeneBySymbolUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_gene_orthologs_using_get(self, request: operations.GetGeneOrthologsUsingGetRequest) -> operations.GetGeneOrthologsUsingGetResponse:
        r"""Return a list of gene orthologs
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/genes/orthologs/{rgdId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeneOrthologsUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_genes_annotated_using_get(self, request: operations.GetGenesAnnotatedUsingGetRequest) -> operations.GetGenesAnnotatedUsingGetResponse:
        r"""Return a list of genes annotated to an ontology term
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/genes/annotation/{accId}/{speciesTypeKey}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenesAnnotatedUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_genes_by_affy_id_using_get(self, request: operations.GetGenesByAffyIDUsingGetRequest) -> operations.GetGenesByAffyIDUsingGetResponse:
        r"""Return a list of genes for an affymetrix ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/genes/affyId/{affyId}/{speciesTypeKey}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenesByAffyIDUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_genes_by_alias_symbol_using_get(self, request: operations.GetGenesByAliasSymbolUsingGetRequest) -> operations.GetGenesByAliasSymbolUsingGetResponse:
        r"""Return a list of genes for an alias and species
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/genes/alias/{aliasSymbol}/{speciesTypeKey}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenesByAliasSymbolUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_genes_by_keyword_using_get(self, request: operations.GetGenesByKeywordUsingGetRequest) -> operations.GetGenesByKeywordUsingGetResponse:
        r"""Return a list of genes by keyword and species type key
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/genes/keyword/{keyword}/{speciesTypeKey}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenesByKeywordUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_genes_by_position_using_get(self, request: operations.GetGenesByPositionUsingGetRequest) -> operations.GetGenesByPositionUsingGetResponse:
        r"""Return a list of genes position and map key
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/genes/{chr}/{start}/{stop}/{mapKey}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenesByPositionUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_genes_by_species_using_get(self, request: operations.GetGenesBySpeciesUsingGetRequest) -> operations.GetGenesBySpeciesUsingGetResponse:
        r"""Return a list of all genes for a species in RGD
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/genes/species/{speciesTypeKey}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenesBySpeciesUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_genes_in_region_using_get(self, request: operations.GetGenesInRegionUsingGetRequest) -> operations.GetGenesInRegionUsingGetResponse:
        r"""Return a list of genes in region
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/genes/region/{chr}/{start}/{stop}/{mapKey}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenesInRegionUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_mapped_genes_by_position_using_get(self, request: operations.GetMappedGenesByPositionUsingGetRequest) -> operations.GetMappedGenesByPositionUsingGetResponse:
        r"""Return a list of genes position and map key
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/genes/mapped/{chr}/{start}/{stop}/{mapKey}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMappedGenesByPositionUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_orthologs_by_list_using_post(self, request: operations.GetOrthologsByListUsingPostRequest) -> operations.GetOrthologsByListUsingPostResponse:
        r"""Return a list of gene orthologs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/genes/orthologs"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrthologsByListUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 201:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    