import dataclasses
from typing import Optional
from ..shared import error as shared_error


@dataclasses.dataclass
class DownloadHTMLInvoicePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DownloadHTMLInvoiceRequest:
    path_params: DownloadHTMLInvoicePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DownloadHTMLInvoiceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    download_html_invoice_200_text_html_string: Optional[str] = dataclasses.field(default=None)
    
