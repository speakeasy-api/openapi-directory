import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RegisterVideoEditorRequest:
    r"""RegisterVideoEditorRequest
    Request to register a new instance of the video editor
    """
    
    image_subscription_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageSubscriptionId') }})
    video_subscription_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoSubscriptionId') }})
    webhook_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookUrl') }})
    
