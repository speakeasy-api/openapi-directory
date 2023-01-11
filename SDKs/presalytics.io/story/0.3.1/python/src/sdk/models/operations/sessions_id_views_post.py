import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import view as shared_view


@dataclasses.dataclass
class SessionsIDViewsPostPathParams:
    session_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'session_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class SessionsIDViewsPostRequiredParametersToCreateAView:
    r"""SessionsIDViewsPostRequiredParametersToCreateAView
    A page view required a page number from the story outline to be created
    """
    
    end_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    page_number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageNumber') }})
    start_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    active_m_secs: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeMSecs') }})
    additional: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additional') }})
    

@dataclasses.dataclass
class SessionsIDViewsPostRequest:
    path_params: SessionsIDViewsPostPathParams = dataclasses.field()
    request: SessionsIDViewsPostRequiredParametersToCreateAView = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SessionsIDViewsPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    problem_detail: Optional[Any] = dataclasses.field(default=None)
    view: Optional[shared_view.View] = dataclasses.field(default=None)
    
