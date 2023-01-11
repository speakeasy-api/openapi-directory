import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cohort as shared_cohort


@dataclass_json
@dataclasses.dataclass
class CohortGroup:
    r"""CohortGroup
    Defines a cohort group. For example: \"cohortGroup\": { \"cohorts\": [{ \"name\": \"cohort 1\", \"type\": \"FIRST_VISIT_DATE\", \"dateRange\": { \"startDate\": \"2015-08-01\", \"endDate\": \"2015-08-01\" } },{ \"name\": \"cohort 2\" \"type\": \"FIRST_VISIT_DATE\" \"dateRange\": { \"startDate\": \"2015-07-01\", \"endDate\": \"2015-07-01\" } }] }
    """
    
    cohorts: Optional[list[shared_cohort.Cohort]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cohorts') }})
    lifetime_value: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifetimeValue') }})
    
