"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import employmentsourcetype_enum as shared_employmentsourcetype_enum
from ..shared import linktokencreaterequestemploymentbankincome as shared_linktokencreaterequestemploymentbankincome
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class LinkTokenCreateRequestEmployment:
    r"""Specifies options for initializing Link for use with the Employment product. This field is required if `employment` is included in the `products` array."""
    
    bank_employment: Optional[shared_linktokencreaterequestemploymentbankincome.LinkTokenCreateRequestEmploymentBankIncome] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('bank_employment'), 'exclude': lambda f: f is None }})
    r"""Specifies options for initializing Link for use with Bank Employment. This field is required if `employment` is included in the `products` array and `bank` is specified in `employment_source_types`."""  
    employment_source_types: Optional[list[shared_employmentsourcetype_enum.EmploymentSourceTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('employment_source_types'), 'exclude': lambda f: f is None }})
    r"""The types of source employment data that users will be permitted to share. Options include `bank` and `payroll`. Currently you can only specify one of these options."""  
    