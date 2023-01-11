import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudassuredworkloadsv1violationremediationinstructionsconsole as shared_googlecloudassuredworkloadsv1violationremediationinstructionsconsole
from ..shared import googlecloudassuredworkloadsv1violationremediationinstructionsgcloud as shared_googlecloudassuredworkloadsv1violationremediationinstructionsgcloud


@dataclass_json
@dataclasses.dataclass
class GoogleCloudAssuredworkloadsV1ViolationRemediationInstructions:
    r"""GoogleCloudAssuredworkloadsV1ViolationRemediationInstructions
    Instructions to remediate violation
    """
    
    console_instructions: Optional[shared_googlecloudassuredworkloadsv1violationremediationinstructionsconsole.GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsole] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consoleInstructions') }})
    gcloud_instructions: Optional[shared_googlecloudassuredworkloadsv1violationremediationinstructionsgcloud.GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcloudInstructions') }})
    
