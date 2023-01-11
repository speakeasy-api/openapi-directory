import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import testvalidateheader as shared_testvalidateheader
from ..shared import testvalidatequery as shared_testvalidatequery


@dataclass_json
@dataclasses.dataclass
class TestValidate:
    r"""TestValidate
    Validation results
    """
    
    header: Optional[shared_testvalidateheader.TestValidateHeader] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    query: Optional[shared_testvalidatequery.TestValidateQuery] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    
