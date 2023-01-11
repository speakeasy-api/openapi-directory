import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud:
    r"""GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud
    Remediation instructions to resolve violation via gcloud cli
    """
    
    additional_links: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalLinks') }})
    gcloud_commands: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcloudCommands') }})
    steps: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('steps') }})
    
