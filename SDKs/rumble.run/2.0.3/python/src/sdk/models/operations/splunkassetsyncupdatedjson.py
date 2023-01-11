import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import assetswithcheckpoint as shared_assetswithcheckpoint


@dataclasses.dataclass
class SplunkAssetSyncUpdatedJSONQueryParams:
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    since: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SplunkAssetSyncUpdatedJSONSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class SplunkAssetSyncUpdatedJSONRequest:
    query_params: SplunkAssetSyncUpdatedJSONQueryParams = dataclasses.field()
    security: SplunkAssetSyncUpdatedJSONSecurity = dataclasses.field()
    

@dataclasses.dataclass
class SplunkAssetSyncUpdatedJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    assets_with_checkpoint: Optional[shared_assetswithcheckpoint.AssetsWithCheckpoint] = dataclasses.field(default=None)
    
