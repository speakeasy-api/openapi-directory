import dataclasses
from typing import Optional
from ..shared import syndicatemarshallerwrapped as shared_syndicatemarshallerwrapped


@dataclasses.dataclass
class GetResourcesMediaIDSyndicateFormatPathParams:
    format: str = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesMediaIDSyndicateFormatQueryParams:
    autoplay: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'autoplay', 'style': 'form', 'explode': False }})
    css_class: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cssClass', 'style': 'form', 'explode': False }})
    font_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'font-size', 'style': 'form', 'explode': False }})
    image_float: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'imageFloat', 'style': 'form', 'explode': False }})
    image_margin: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'imageMargin', 'style': 'form', 'explode': False }})
    rel: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rel', 'style': 'form', 'explode': False }})
    strip_breaks: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'stripBreaks', 'style': 'form', 'explode': False }})
    strip_classes: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'stripClasses', 'style': 'form', 'explode': False }})
    strip_images: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'stripImages', 'style': 'form', 'explode': False }})
    strip_scripts: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'stripScripts', 'style': 'form', 'explode': False }})
    strip_styles: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'stripStyles', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesMediaIDSyndicateFormatRequest:
    path_params: GetResourcesMediaIDSyndicateFormatPathParams = dataclasses.field()
    query_params: GetResourcesMediaIDSyndicateFormatQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResourcesMediaIDSyndicateFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    syndicate_marshaller_wrapped: Optional[shared_syndicatemarshallerwrapped.SyndicateMarshallerWrapped] = dataclasses.field(default=None)
    
