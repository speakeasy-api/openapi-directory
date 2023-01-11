import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import marketingeventexternaluniqueidentifier as shared_marketingeventexternaluniqueidentifier


@dataclass_json
@dataclasses.dataclass
class CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging:
    results: list[shared_marketingeventexternaluniqueidentifier.MarketingEventExternalUniqueIdentifier] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
