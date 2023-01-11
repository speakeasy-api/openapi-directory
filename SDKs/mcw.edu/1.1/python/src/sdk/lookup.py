import requests
from sdk.models import operations
from . import utils

class Lookup:
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

    
    def get_ensembl_gene_mapping_using_get(self, request: operations.GetEnsemblGeneMappingUsingGetRequest) -> operations.GetEnsemblGeneMappingUsingGetResponse:
        r"""Translate an RGD ID to an Ensembl Gene  ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lookup/id/map/EnsemblGene/{rgdId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEnsemblGeneMappingUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_ensembl_gene_mapping_using_post(self, request: operations.GetEnsemblGeneMappingUsingPostRequest) -> operations.GetEnsemblGeneMappingUsingPostResponse:
        r"""Translate RGD IDs to Ensembl Gene IDs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/lookup/id/map/EnsemblGene"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEnsemblGeneMappingUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_ensembl_protein_mapping_using_get(self, request: operations.GetEnsemblProteinMappingUsingGetRequest) -> operations.GetEnsemblProteinMappingUsingGetResponse:
        r"""Translate an RGD ID to an Ensembl Protein ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lookup/id/map/EnsemblProtein/{rgdId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEnsemblProteinMappingUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_ensembl_protein_mapping_using_post(self, request: operations.GetEnsemblProteinMappingUsingPostRequest) -> operations.GetEnsemblProteinMappingUsingPostResponse:
        r"""Translate RGD IDs to Ensembl Protein IDs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/lookup/id/map/EnsemblProtein"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEnsemblProteinMappingUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_ensembl_transcript_mapping_using_get(self, request: operations.GetEnsemblTranscriptMappingUsingGetRequest) -> operations.GetEnsemblTranscriptMappingUsingGetResponse:
        r"""Translate an RGD ID to an Ensembl Transcript ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lookup/id/map/EnsemblTranscript/{rgdId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEnsemblTranscriptMappingUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_ensembl_transcript_mapping_using_post(self, request: operations.GetEnsemblTranscriptMappingUsingPostRequest) -> operations.GetEnsemblTranscriptMappingUsingPostResponse:
        r"""Translate RGD IDs to Ensembl Transcript IDs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/lookup/id/map/EnsemblTranscript"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEnsemblTranscriptMappingUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_gtex_mapping_using_get(self, request: operations.GetGtexMappingUsingGetRequest) -> operations.GetGtexMappingUsingGetResponse:
        r"""Translate an RGD ID to an GTEx ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lookup/id/map/GTEx/{rgdId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGtexMappingUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_gtex_mapping_using_post(self, request: operations.GetGtexMappingUsingPostRequest) -> operations.GetGtexMappingUsingPostResponse:
        r"""Translate RGD IDs to GTEx IDs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/lookup/id/map/GTEx"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGtexMappingUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_gen_bank_nucleotide_mapping_using_get(self, request: operations.GetGenBankNucleotideMappingUsingGetRequest) -> operations.GetGenBankNucleotideMappingUsingGetResponse:
        r"""Translate an RGD ID to a GenBank Nucleotide ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lookup/id/map/GenBankNucleotide/{rgdId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenBankNucleotideMappingUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_gen_bank_nucleotide_mapping_using_post(self, request: operations.GetGenBankNucleotideMappingUsingPostRequest) -> operations.GetGenBankNucleotideMappingUsingPostResponse:
        r"""Translate RGD IDs to GenBank Nucleotide IDs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/lookup/id/map/GenBankNucleotide"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenBankNucleotideMappingUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_gen_bank_protein_mapping_using_get(self, request: operations.GetGenBankProteinMappingUsingGetRequest) -> operations.GetGenBankProteinMappingUsingGetResponse:
        r"""Translate an RGD ID to a GenBank Protein ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lookup/id/map/GenBankProtein/{rgdId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenBankProteinMappingUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_gen_bank_protein_mapping_using_post(self, request: operations.GetGenBankProteinMappingUsingPostRequest) -> operations.GetGenBankProteinMappingUsingPostResponse:
        r"""Translate RGD IDs to GenBank Protein IDs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/lookup/id/map/GenBankProtein"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenBankProteinMappingUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_gene_types_using_get(self) -> operations.GetGeneTypesUsingGetResponse:
        r"""Returns a list of gene types avialable in RGD
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/lookup/geneTypes"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeneTypesUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_hgnc_mapping_using_get(self, request: operations.GetHgncMappingUsingGetRequest) -> operations.GetHgncMappingUsingGetResponse:
        r"""Translate an RGD ID to an HGNC ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lookup/id/map/HGNC/{rgdId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHgncMappingUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_hgnc_mapping_using_post(self, request: operations.GetHgncMappingUsingPostRequest) -> operations.GetHgncMappingUsingPostResponse:
        r"""Translate RGD IDs to HGNC IDs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/lookup/id/map/HGNC"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHgncMappingUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_mgi_mapping_using_get(self, request: operations.GetMgiMappingUsingGetRequest) -> operations.GetMgiMappingUsingGetResponse:
        r"""Translate an RGD ID to an MGI ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lookup/id/map/MGI/{rgdId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMgiMappingUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_mgi_mapping_using_post(self, request: operations.GetMgiMappingUsingPostRequest) -> operations.GetMgiMappingUsingPostResponse:
        r"""Translate RGD IDs to MGI IDs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/lookup/id/map/MGI"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMgiMappingUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_maps_using_get(self, request: operations.GetMapsUsingGetRequest) -> operations.GetMapsUsingGetResponse:
        r"""Return a list assembly maps for a species
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lookup/maps/{speciesTypeKey}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMapsUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_maps_using_get_1(self, request: operations.GetMapsUsingGet1Request) -> operations.GetMapsUsingGet1Response:
        r"""Return a standardUnit for an ontology if it exists
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lookup/standardUnit/{accId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMapsUsingGet1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.get_maps_using_get_1_200_wildcard_string = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_ncbi_gene_mapping_using_get(self, request: operations.GetNcbiGeneMappingUsingGetRequest) -> operations.GetNcbiGeneMappingUsingGetResponse:
        r"""Translate an RGD ID to an NCBI Gene ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lookup/id/map/NCBIGene/{rgdId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNcbiGeneMappingUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_ncbi_gene_mapping_using_post(self, request: operations.GetNcbiGeneMappingUsingPostRequest) -> operations.GetNcbiGeneMappingUsingPostResponse:
        r"""Translate RGD IDs to NCBI Gene IDs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/lookup/id/map/NCBIGene"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNcbiGeneMappingUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_species_types_using_get(self) -> operations.GetSpeciesTypesUsingGetResponse:
        r"""Return a Map of species type keys available in RGD
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/lookup/speciesTypeKeys"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSpeciesTypesUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_uni_prot_mapping_using_get(self, request: operations.GetUniProtMappingUsingGetRequest) -> operations.GetUniProtMappingUsingGetResponse:
        r"""Translate an RGD ID to a UniProt ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lookup/id/map/UniProt/{rgdId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUniProtMappingUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_uni_prot_mapping_using_post(self, request: operations.GetUniProtMappingUsingPostRequest) -> operations.GetUniProtMappingUsingPostResponse:
        r"""Translate RGD IDs to UniProt IDs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/lookup/id/map/UniProt"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUniProtMappingUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
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

    