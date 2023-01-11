import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Requisition:
    r"""Requisition
    RequisitionSerializer.
    """
    
    enduser_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enduser_id') }})
    redirect: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect') }})
    reference: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference') }})
    accounts: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accounts') }})
    agreements: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agreements') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    status: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    user_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_language') }})
    

@dataclass_json
@dataclasses.dataclass
class RequisitionInput:
    r"""RequisitionInput
    RequisitionSerializer.
    """
    
    enduser_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enduser_id') }, 'form': { 'field_name': 'enduser_id' }, 'multipart_form': { 'field_name': 'enduser_id' }})
    redirect: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect') }, 'form': { 'field_name': 'redirect' }, 'multipart_form': { 'field_name': 'redirect' }})
    reference: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference') }, 'form': { 'field_name': 'reference' }, 'multipart_form': { 'field_name': 'reference' }})
    agreements: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agreements') }, 'form': { 'field_name': 'agreements' }, 'multipart_form': { 'field_name': 'agreements', 'json': True }})
    user_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_language') }, 'form': { 'field_name': 'user_language' }, 'multipart_form': { 'field_name': 'user_language' }})
    
