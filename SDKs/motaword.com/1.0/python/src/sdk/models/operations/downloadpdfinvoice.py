import dataclasses
from typing import Optional
from ..shared import error as shared_error


@dataclasses.dataclass
class DownloadPdfInvoicePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DownloadPdfInvoiceRequest:
    path_params: DownloadPdfInvoicePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DownloadPdfInvoiceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    download_pdf_invoice_200_application_pdf_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
