import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TagCommit:
    sha: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class Tag:
    r"""Tag
    Tag
    """
    
    commit: TagCommit = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    tarball_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tarball_url') }})
    zipball_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('zipball_url') }})
    
