import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TagResourceRelationshipsTransactionsLinks:
    related: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('related') }})
    

@dataclass_json
@dataclasses.dataclass
class TagResourceRelationshipsTransactions:
    links: Optional[TagResourceRelationshipsTransactionsLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclasses.dataclass
class TagResourceRelationships:
    transactions: TagResourceRelationshipsTransactions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactions') }})
    

@dataclass_json
@dataclasses.dataclass
class TagResource:
    r"""TagResource
    Provides information about a tag.
    
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    relationships: TagResourceRelationships = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
