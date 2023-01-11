import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ErrorTemplate:
    r"""ErrorTemplate
    Error templates for a service descriptor
    """
    
    messages: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    service_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceId') }})
    template40x: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('template40x') }})
    template50x: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('template50x') }})
    template_build: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateBuild') }})
    template_maintenance: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateMaintenance') }})
    
