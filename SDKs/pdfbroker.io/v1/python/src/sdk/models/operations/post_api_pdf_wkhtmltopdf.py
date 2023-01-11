import dataclasses
from typing import Optional
from ..shared import wkhtmltopdfrequestdto as shared_wkhtmltopdfrequestdto
from ..shared import errorresponsedto as shared_errorresponsedto
from ..shared import pdfresponsedto as shared_pdfresponsedto


@dataclasses.dataclass
class PostAPIPdfWkhtmltopdfRequest:
    request: Optional[shared_wkhtmltopdfrequestdto.WkHTMLToPdfRequestDto] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostAPIPdfWkhtmltopdfResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_dto: Optional[shared_errorresponsedto.ErrorResponseDto] = dataclasses.field(default=None)
    pdf_response_dto: Optional[shared_pdfresponsedto.PdfResponseDto] = dataclasses.field(default=None)
    post_api_pdf_wkhtmltopdf_200_application_pdf_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
