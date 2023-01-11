import dataclasses
from typing import Any,Optional
from ..shared import assetreportauditcopycreaterequest as shared_assetreportauditcopycreaterequest


@dataclasses.dataclass
class AssetReportAuditCopyCreateRequest:
    request: shared_assetreportauditcopycreaterequest.AssetReportAuditCopyCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AssetReportAuditCopyCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    asset_report_audit_copy_create_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
