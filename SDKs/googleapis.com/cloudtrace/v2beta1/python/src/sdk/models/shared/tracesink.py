import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import outputconfig as shared_outputconfig


@dataclass_json
@dataclasses.dataclass
class TraceSink:
    r"""TraceSink
    Describes a sink used to export traces to a BigQuery dataset. The sink must be created within a project.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    output_config: Optional[shared_outputconfig.OutputConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputConfig') }})
    writer_identity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writerIdentity') }})
    

@dataclass_json
@dataclasses.dataclass
class TraceSinkInput:
    r"""TraceSinkInput
    Describes a sink used to export traces to a BigQuery dataset. The sink must be created within a project.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    output_config: Optional[shared_outputconfig.OutputConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputConfig') }})
    
