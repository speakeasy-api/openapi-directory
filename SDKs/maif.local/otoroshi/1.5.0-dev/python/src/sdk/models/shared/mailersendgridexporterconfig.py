import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MailerSendgridExporterConfigTypeEnum(str, Enum):
    SENDGRID = "sendgrid"


@dataclass_json
@dataclasses.dataclass
class MailerSendgridExporterConfig:
    type: MailerSendgridExporterConfigTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    api_key_public: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKeyPublic') }})
    to: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    
