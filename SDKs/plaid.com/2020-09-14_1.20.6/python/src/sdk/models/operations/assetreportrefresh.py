import dataclasses
from typing import Any,Optional
from ..shared import assetreportrefreshrequest as shared_assetreportrefreshrequest


@dataclasses.dataclass
class AssetReportRefreshRequest:
    request: shared_assetreportrefreshrequest.AssetReportRefreshRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AssetReportRefreshResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    asset_report_refresh_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
