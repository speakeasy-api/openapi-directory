import dataclasses
from typing import Optional
from ..shared import apierror as shared_apierror


@dataclasses.dataclass
class Html5RenderRequestBody:
    content: str = dataclasses.field(metadata={'form': { 'field_name': 'content' }})
    css: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'css' }})
    footer_font: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'footer-font' }})
    footer_font_size: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'footer-font-size' }})
    footer_line: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'footer-line' }})
    footer_size: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'footer-size' }})
    footer_text_center: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'footer-text-center' }})
    footer_text_left: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'footer-text-left' }})
    footer_text_right: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'footer-text-right' }})
    format: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'format' }})
    forms: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'forms' }})
    grayscale: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'grayscale' }})
    header_font: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'header-font' }})
    header_font_size: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'header-font-size' }})
    header_line: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'header-line' }})
    header_size: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'header-size' }})
    header_text_center: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'header-text-center' }})
    header_text_left: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'header-text-left' }})
    header_text_right: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'header-text-right' }})
    image_height: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'image-height' }})
    image_width: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'image-width' }})
    landscape: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'landscape' }})
    margin: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'margin' }})
    margin_bottom: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'margin-bottom' }})
    margin_left: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'margin-left' }})
    margin_right: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'margin-right' }})
    margin_top: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'margin-top' }})
    media_print: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'media-print' }})
    media_queries: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'media-queries' }})
    page_height: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'page-height' }})
    page_size: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'page-size' }})
    page_width: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'page-width' }})
    render_delay: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'render-delay' }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'title' }})
    zoom: Optional[float] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'zoom' }})
    

@dataclasses.dataclass
class Html5RenderRequest:
    request: Html5RenderRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class Html5RenderResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    html5_render_200_application_json_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
