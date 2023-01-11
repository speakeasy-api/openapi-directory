import dataclasses
from typing import Optional
from ..shared import assetreportpdfgetrequest as shared_assetreportpdfgetrequest


@dataclasses.dataclass
class AssetReportPdfGetRequest:
    request: shared_assetreportpdfgetrequest.AssetReportPdfGetRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AssetReportPdfGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    asset_report_pdf_get_response: Optional[bytes] = dataclasses.field(default=None)
    
