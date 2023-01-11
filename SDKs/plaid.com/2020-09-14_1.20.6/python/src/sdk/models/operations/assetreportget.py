import dataclasses
from typing import Any,Optional
from ..shared import assetreportgetrequest as shared_assetreportgetrequest


@dataclasses.dataclass
class AssetReportGetRequest:
    request: shared_assetreportgetrequest.AssetReportGetRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AssetReportGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    asset_report_get_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
