import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import locationruleupdate as shared_locationruleupdate
from ..shared import responsedefaultresource as shared_responsedefaultresource


@dataclasses.dataclass
class AddLocationRuleRequest:
    request: shared_locationruleupdate.LocationRuleUpdate = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddLocationRuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_default_resource: Optional[shared_responsedefaultresource.ResponseDefaultResource] = dataclasses.field(default=None)
    
