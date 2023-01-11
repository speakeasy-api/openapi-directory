import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Association:
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

    
    def get_association_by_subject_and_assoc_type(self, request: operations.GetAssociationBySubjectAndAssocTypeRequest) -> operations.GetAssociationBySubjectAndAssocTypeResponse:
        r"""Returns list of matching associations of a given type
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/association/type/{association_type}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAssociationBySubjectAndAssocTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AssociationResults]])
                res.association_results = out

        return res

    
    def get_association_by_subject_and_object_category_search(self, request: operations.GetAssociationBySubjectAndObjectCategorySearchRequest) -> operations.GetAssociationBySubjectAndObjectCategorySearchResponse:
        r"""Returns list of matching associations between a given subject and object category
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/association/find/{subject_category}/{object_category}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAssociationBySubjectAndObjectCategorySearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AssociationResults]])
                res.association_results = out

        return res

    
    def get_association_by_subject_category_search(self, request: operations.GetAssociationBySubjectCategorySearchRequest) -> operations.GetAssociationBySubjectCategorySearchResponse:
        r"""Returns list of matching associations for a given subject category
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/association/find/{subject_category}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAssociationBySubjectCategorySearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AssociationResults]])
                res.association_results = out

        return res

    
    def get_association_object(self, request: operations.GetAssociationObjectRequest) -> operations.GetAssociationObjectResponse:
        r"""Returns the association with a given identifier
        An association connects, at a minimum, two things, designated subject and object,
        via some relationship. Associations also include evidence, provenance etc.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/association/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAssociationObjectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AssociationResults]])
                res.association_results = out

        return res

    
    def get_associations_between(self, request: operations.GetAssociationsBetweenRequest) -> operations.GetAssociationsBetweenResponse:
        r"""Returns associations connecting two entities
        Given two entities (e.g. a particular gene and a particular disease), if these two entities
        are connected (directly or indirectly), then return the association objects describing
        the connection.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/association/between/{subject}/{object}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAssociationsBetweenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AssociationResults]])
                res.association_results = out

        return res

    
    def get_associations_from(self, request: operations.GetAssociationsFromRequest) -> operations.GetAssociationsFromResponse:
        r"""Returns list of matching associations starting from a given subject (source)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/association/from/{subject}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAssociationsFromResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AssociationResults]])
                res.association_results = out

        return res

    
    def get_associations_to(self, request: operations.GetAssociationsToRequest) -> operations.GetAssociationsToResponse:
        r"""Returns list of matching associations pointing to a given object (target)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/association/to/{object}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAssociationsToResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AssociationResults]])
                res.association_results = out

        return res

    