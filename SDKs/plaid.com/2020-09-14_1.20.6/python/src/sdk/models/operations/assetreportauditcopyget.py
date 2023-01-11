import dataclasses
from typing import Any,Optional
from ..shared import assetreportauditcopygetrequest as shared_assetreportauditcopygetrequest


@dataclasses.dataclass
class AssetReportAuditCopyGetRequest:
    request: shared_assetreportauditcopygetrequest.AssetReportAuditCopyGetRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AssetReportAuditCopyGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    asset_report_get_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
