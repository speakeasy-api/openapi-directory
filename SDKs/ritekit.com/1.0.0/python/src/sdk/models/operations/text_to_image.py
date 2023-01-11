import dataclasses
from typing import Optional


@dataclasses.dataclass
class TextToImageQueryParams:
    animation: str = dataclasses.field(metadata={'query_param': { 'field_name': 'animation', 'style': 'form', 'explode': True }})
    author: str = dataclasses.field(metadata={'query_param': { 'field_name': 'author', 'style': 'form', 'explode': True }})
    author_font: str = dataclasses.field(metadata={'query_param': { 'field_name': 'authorFont', 'style': 'form', 'explode': True }})
    author_font_color: str = dataclasses.field(metadata={'query_param': { 'field_name': 'authorFontColor', 'style': 'form', 'explode': True }})
    background_color: str = dataclasses.field(metadata={'query_param': { 'field_name': 'backgroundColor', 'style': 'form', 'explode': True }})
    bg_type: str = dataclasses.field(metadata={'query_param': { 'field_name': 'bgType', 'style': 'form', 'explode': True }})
    brand_logo: str = dataclasses.field(metadata={'query_param': { 'field_name': 'brandLogo', 'style': 'form', 'explode': True }})
    enable_highlight: int = dataclasses.field(metadata={'query_param': { 'field_name': 'enableHighlight', 'style': 'form', 'explode': True }})
    font_size: int = dataclasses.field(metadata={'query_param': { 'field_name': 'fontSize', 'style': 'form', 'explode': True }})
    gradient_color1: str = dataclasses.field(metadata={'query_param': { 'field_name': 'gradientColor1', 'style': 'form', 'explode': True }})
    gradient_color2: str = dataclasses.field(metadata={'query_param': { 'field_name': 'gradientColor2', 'style': 'form', 'explode': True }})
    gradient_type: str = dataclasses.field(metadata={'query_param': { 'field_name': 'gradientType', 'style': 'form', 'explode': True }})
    highlight_color: str = dataclasses.field(metadata={'query_param': { 'field_name': 'highlightColor', 'style': 'form', 'explode': True }})
    quote: str = dataclasses.field(metadata={'query_param': { 'field_name': 'quote', 'style': 'form', 'explode': True }})
    quote_font: str = dataclasses.field(metadata={'query_param': { 'field_name': 'quoteFont', 'style': 'form', 'explode': True }})
    quote_font_color: str = dataclasses.field(metadata={'query_param': { 'field_name': 'quoteFontColor', 'style': 'form', 'explode': True }})
    show_quote_mark: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'showQuoteMark', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TextToImageRequest:
    query_params: TextToImageQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TextToImageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
