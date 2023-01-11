import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import assetswithcheckpoint as shared_assetswithcheckpoint


@dataclasses.dataclass
class SplunkAssetSyncCreatedJSONQueryParams:
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    since: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SplunkAssetSyncCreatedJSONSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class SplunkAssetSyncCreatedJSONRequest:
    query_params: SplunkAssetSyncCreatedJSONQueryParams = dataclasses.field()
    security: SplunkAssetSyncCreatedJSONSecurity = dataclasses.field()
    

@dataclasses.dataclass
class SplunkAssetSyncCreatedJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    assets_with_checkpoint: Optional[shared_assetswithcheckpoint.AssetsWithCheckpoint] = dataclasses.field(default=None)
    
