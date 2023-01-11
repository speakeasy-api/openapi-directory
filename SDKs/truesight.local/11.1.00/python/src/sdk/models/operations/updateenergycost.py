import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import groupconfiguration as shared_groupconfiguration


@dataclasses.dataclass
class UpdateEnergyCostPathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateEnergyCostRequest:
    path_params: UpdateEnergyCostPathParams = dataclasses.field()
    request: Optional[shared_groupconfiguration.GroupConfiguration] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateEnergyCostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
