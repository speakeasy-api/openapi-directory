import dataclasses
from typing import Any,Optional
from ..shared import assetreportauditcopyremoverequest as shared_assetreportauditcopyremoverequest


@dataclasses.dataclass
class AssetReportAuditCopyRemoveRequest:
    request: shared_assetreportauditcopyremoverequest.AssetReportAuditCopyRemoveRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AssetReportAuditCopyRemoveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    asset_report_audit_copy_remove_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
