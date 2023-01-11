import requests
from sdk.models import operations
from . import utils

class Annotation:
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

    
    def get_annotation_count_by_acc_id_and_object_type_using_get(self, request: operations.GetAnnotationCountByAccIDAndObjectTypeUsingGetRequest) -> operations.GetAnnotationCountByAccIDAndObjectTypeUsingGetResponse:
        r"""Returns annotation count for ontology accession ID and object type
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/annotations/count/{accId}/{speciesTypeKey}/{includeChildren}/{objectType}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnnotationCountByAccIDAndObjectTypeUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_annotation_count_by_acc_id_and_species_using_get(self, request: operations.GetAnnotationCountByAccIDAndSpeciesUsingGetRequest) -> operations.GetAnnotationCountByAccIDAndSpeciesUsingGetResponse:
        r"""Returns annotation count for ontology accession ID and speicies
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/annotations/count/{accId}/{speciesTypeKey}/{includeChildren}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnnotationCountByAccIDAndSpeciesUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_annotation_count_by_acc_id_using_get(self, request: operations.GetAnnotationCountByAccIDUsingGetRequest) -> operations.GetAnnotationCountByAccIDUsingGetResponse:
        r"""Returns annotation count for ontology accession ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/annotations/count/{accId}/{includeChildren}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnnotationCountByAccIDUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_annotations_by_acc_id_and_rgd_id_using_get(self, request: operations.GetAnnotationsByAccIDAndRgdIDUsingGetRequest) -> operations.GetAnnotationsByAccIDAndRgdIDUsingGetResponse:
        r"""Returns a list of annotations by RGD ID and ontology term accession ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/annotations/{accId}/{rgdId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnnotationsByAccIDAndRgdIDUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_annotations_by_rgd_id_and_ontology_using_get(self, request: operations.GetAnnotationsByRgdIDAndOntologyUsingGetRequest) -> operations.GetAnnotationsByRgdIDAndOntologyUsingGetResponse:
        r"""Returns a list of annotations by RGD ID and ontology prefix
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/annotations/rgdId/{rgdId}/{ontologyPrefix}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnnotationsByRgdIDAndOntologyUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_annotations_by_rgd_id_using_get(self, request: operations.GetAnnotationsByRgdIDUsingGetRequest) -> operations.GetAnnotationsByRgdIDUsingGetResponse:
        r"""Returns a list of annotations by RGD ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/annotations/rgdId/{rgdId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnnotationsByRgdIDUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_annotations_using_get(self, request: operations.GetAnnotationsUsingGetRequest) -> operations.GetAnnotationsUsingGetResponse:
        r"""Returns a list annotations for an ontology term or a term and it's children
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/annotations/{accId}/{speciesTypeKey}/{includeChildren}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnnotationsUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_annotations_using_post(self, request: operations.GetAnnotationsUsingPostRequest) -> operations.GetAnnotationsUsingPostResponse:
        r"""Return a list of genes annotated to an ontology term
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/annotations/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnnotationsUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_annots_by_refrerence_using_get(self, request: operations.GetAnnotsByRefrerenceUsingGetRequest) -> operations.GetAnnotsByRefrerenceUsingGetResponse:
        r"""Returns a list of annotations for a reference
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/annotations/reference/{refRgdId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnnotsByRefrerenceUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_term_acc_ids_using_get(self, request: operations.GetTermAccIdsUsingGetRequest) -> operations.GetTermAccIdsUsingGetResponse:
        r"""Returns a list ontology term accession IDs annotated to an rgd object
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/annotations/accId/{rgdId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTermAccIdsUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
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

    