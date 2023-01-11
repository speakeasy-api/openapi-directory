import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class PutQuoteImageQueryParams:
    quote_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'quote_id', 'style': 'form', 'explode': True }})
    bg_color: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'bg_color', 'style': 'form', 'explode': True }})
    bgimage_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'bgimage_id', 'style': 'form', 'explode': True }})
    branding: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'branding', 'style': 'form', 'explode': True }})
    font_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'font_id', 'style': 'form', 'explode': True }})
    halign: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'halign', 'style': 'form', 'explode': True }})
    height: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': True }})
    include_transparent_layer: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_transparent_layer', 'style': 'form', 'explode': True }})
    text_color: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'text_color', 'style': 'form', 'explode': True }})
    text_size: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'text_size', 'style': 'form', 'explode': True }})
    valign: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'valign', 'style': 'form', 'explode': True }})
    width: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PutQuoteImageSecurity:
    x_they_said_so_api_secret: shared_security.SchemeXTheySaidSoAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PutQuoteImageRequest:
    query_params: PutQuoteImageQueryParams = dataclasses.field()
    security: PutQuoteImageSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PutQuoteImageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
