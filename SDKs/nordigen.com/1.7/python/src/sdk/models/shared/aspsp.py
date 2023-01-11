import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Aspsp:
    r"""Aspsp
    Represents an ASPSP.
    """
    
    countries: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('countries') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    logo: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    bic: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bic') }})
    transaction_total_days: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction_total_days') }})
    
