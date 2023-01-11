import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any
from ..shared import security as shared_security
from ..shared import updatecallrequesttransferncco as shared_updatecallrequesttransferncco
from ..shared import updatecallrequesttransferanswerurl as shared_updatecallrequesttransferanswerurl


@dataclasses.dataclass
class UpdateCallPathParams:
    uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateCallSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class UpdateCallRequest:
    path_params: UpdateCallPathParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateCallSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpdateCallResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
