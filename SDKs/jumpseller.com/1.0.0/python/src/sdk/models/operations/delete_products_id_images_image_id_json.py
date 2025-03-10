"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import notfound as shared_notfound
from typing import Optional


@dataclasses.dataclass
class DeleteProductsIDImagesImageIDJSONRequest:
    
    authtoken: str = dataclasses.field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    r"""API OAuth token."""  
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    r"""Id of the Product"""  
    image_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'image_id', 'style': 'simple', 'explode': False }})
    r"""Id of the Product Image"""  
    login: str = dataclasses.field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    r"""API OAuth login."""  
    

@dataclasses.dataclass
class DeleteProductsIDImagesImageIDJSONResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    delete_products_id_images_image_id_json_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    r"""OK"""  
    not_found: Optional[shared_notfound.NotFound] = dataclasses.field(default=None)
    r"""Product Not Found."""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    