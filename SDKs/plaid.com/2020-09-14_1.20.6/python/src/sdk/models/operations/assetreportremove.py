import dataclasses
from typing import Any,Optional
from ..shared import assetreportremoverequest as shared_assetreportremoverequest


@dataclasses.dataclass
class AssetReportRemoveRequest:
    request: shared_assetreportremoverequest.AssetReportRemoveRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AssetReportRemoveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    asset_report_remove_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
