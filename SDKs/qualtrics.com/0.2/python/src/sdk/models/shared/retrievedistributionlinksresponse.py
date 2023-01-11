import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RetrieveDistributionLinksResponseMeta:
    http_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpStatus') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveDistributionLinksResponseResultElements:
    contact_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactId') }})
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    exceeded_contact_frequency: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('exceededContactFrequency') }})
    external_data_reference: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalDataReference') }})
    first_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    last_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    link_expiration: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkExpiration') }})
    status: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    transaction_id: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionId') }})
    unsubscribed: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unsubscribed') }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveDistributionLinksResponseResult:
    elements: Optional[list[RetrieveDistributionLinksResponseResultElements]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elements') }})
    next_page: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPage') }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveDistributionLinksResponse:
    meta: Optional[RetrieveDistributionLinksResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    result: Optional[RetrieveDistributionLinksResponseResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    
