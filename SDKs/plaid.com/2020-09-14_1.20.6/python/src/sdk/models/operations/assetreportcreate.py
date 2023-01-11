import dataclasses
from typing import Any,Optional
from ..shared import assetreportcreaterequest as shared_assetreportcreaterequest


@dataclasses.dataclass
class AssetReportCreateRequest:
    request: shared_assetreportcreaterequest.AssetReportCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AssetReportCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    asset_report_create_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
