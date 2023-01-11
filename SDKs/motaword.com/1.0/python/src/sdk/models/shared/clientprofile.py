import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import proofreaderwithlanguage as shared_proofreaderwithlanguage


@dataclass_json
@dataclasses.dataclass
class ClientProfileNpsAverage:
    r"""ClientProfileNpsAverage
    information for all nps survey that this client completed
    """
    
    completed_surveys_count: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completed_surveys_count') }})
    score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    

@dataclass_json
@dataclasses.dataclass
class ClientProfileNpsLast:
    r"""ClientProfileNpsLast
    last survey info
    """
    
    completion_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completion_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    

@dataclass_json
@dataclasses.dataclass
class ClientProfileNps:
    r"""ClientProfileNps
    net promoter score info for this client
    """
    
    average: Optional[ClientProfileNpsAverage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('average') }})
    last: Optional[ClientProfileNpsLast] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last') }})
    

@dataclass_json
@dataclasses.dataclass
class ClientProfile:
    account_creation_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_creation_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    client_project_count: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_project_count') }})
    corporate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('corporate') }})
    corporate_id: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('corporate_id') }})
    corporate_user_count: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('corporate_user_count') }})
    frequent_file_extension: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequent_file_extension') }})
    frequent_language_pairs: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequent_language_pairs') }})
    full_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('full_name') }})
    growth: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('growth') }})
    is_complex: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_complex') }})
    last_12_months_spending: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_12_months_spending') }})
    last_project: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_project') }})
    last_project_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_project_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_proofreaders: Optional[list[shared_proofreaderwithlanguage.ProofreaderWithLanguage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_proofreaders') }})
    notes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    nps: Optional[ClientProfileNps] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nps') }})
    user_rank_in_project_count: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_rank_in_project_count') }})
    user_rank_in_spending: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_rank_in_spending') }})
    
