import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ElasticConfig:
    r"""ElasticConfig
    The configuration for elastic access
    """
    
    cluster_uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterUri') }})
    headers: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    index: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    user: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
