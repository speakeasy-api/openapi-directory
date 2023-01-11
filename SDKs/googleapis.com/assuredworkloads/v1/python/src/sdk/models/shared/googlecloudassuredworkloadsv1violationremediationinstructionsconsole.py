import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsole:
    r"""GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsole
    Remediation instructions to resolve violation via cloud console
    """
    
    additional_links: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalLinks') }})
    console_uris: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consoleUris') }})
    steps: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('steps') }})
    
