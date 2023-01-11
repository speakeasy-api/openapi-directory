import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PulsarDataExporterConfig:
    r"""PulsarDataExporterConfig
    The configuration for kafka access
    """
    
    namespace: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespace') }})
    tenant: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenant') }})
    topic: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    uri: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
