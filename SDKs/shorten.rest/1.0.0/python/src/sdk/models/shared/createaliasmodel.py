import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import destinationmodel as shared_destinationmodel
from ..shared import metatagmodel as shared_metatagmodel
from ..shared import snippetmodel as shared_snippetmodel


@dataclass_json
@dataclasses.dataclass
class CreateAliasModel:
    destinations: Optional[list[shared_destinationmodel.DestinationModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinations') }})
    metatags: Optional[list[shared_metatagmodel.MetaTagModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metatags') }})
    snippets: Optional[list[shared_snippetmodel.SnippetModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippets') }})
    
