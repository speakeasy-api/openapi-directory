import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customfield as shared_customfield


@dataclass_json
@dataclasses.dataclass
class CounterOptions:
    r"""CounterOptions
    Increment a streamz counter with the specified metric and field names. Metric names should start with a '/', generally be lowercase-only, and end in \"_count\". Field names should not contain an initial slash. The actual exported metric names will have \"/iam/policy\" prepended. Field names correspond to IAM request parameters and field values are their respective values. Supported field names: - \"authority\", which is \"[token]\" if IAMContext.token is present, otherwise the value of IAMContext.authority_selector if present, and otherwise a representation of IAMContext.principal; or - \"iam_principal\", a representation of IAMContext.principal even if a token or authority selector is present; or - \"\" (empty string), resulting in a counter with no fields. Examples: counter { metric: \"/debug_access_count\" field: \"iam_principal\" } ==> increment counter /iam/policy/debug_access_count {iam_principal=[value of IAMContext.principal]}
    """
    
    custom_fields: Optional[list[shared_customfield.CustomField]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    field: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    metric: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric') }})
    
