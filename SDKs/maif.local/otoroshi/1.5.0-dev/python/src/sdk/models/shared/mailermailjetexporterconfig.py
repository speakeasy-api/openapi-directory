import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MailerMailjetExporterConfigTypeEnum(str, Enum):
    MAILJET = "mailjet"


@dataclass_json
@dataclasses.dataclass
class MailerMailjetExporterConfig:
    type: MailerMailjetExporterConfigTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    api_key_private: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKeyPrivate') }})
    api_key_public: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKeyPublic') }})
    to: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    
