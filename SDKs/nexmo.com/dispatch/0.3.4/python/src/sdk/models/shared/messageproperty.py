import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import audioproperty as shared_audioproperty
from ..shared import fileproperty as shared_fileproperty
from ..shared import imageproperty as shared_imageproperty
from ..shared import templateproperty as shared_templateproperty
from ..shared import videoproperty as shared_videoproperty

class MessagePropertyContentTypeEnum(str, Enum):
    TEXT = "text"
    IMAGE = "image"
    AUDIO = "audio"
    VIDEO = "video"
    FILE = "file"
    TEMPLATE = "template"
    CUSTOM = "custom"


@dataclass_json
@dataclasses.dataclass
class MessagePropertyContent:
    type: MessagePropertyContentTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    audio: Optional[shared_audioproperty.AudioProperty] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio') }})
    file: Optional[shared_fileproperty.FileProperty] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file') }})
    image: Optional[shared_imageproperty.ImageProperty] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    template: Optional[shared_templateproperty.TemplateProperty] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    video: Optional[shared_videoproperty.VideoProperty] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('video') }})
    
class MessagePropertyMessengerCategoryEnum(str, Enum):
    RESPONSE = "response"
    UPDATE = "update"
    MESSAGE_TAG = "message_tag"


@dataclass_json
@dataclasses.dataclass
class MessagePropertyMessenger:
    category: Optional[MessagePropertyMessengerCategoryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    
class MessagePropertyViberServiceMsgCategoryEnum(str, Enum):
    TRANSACTION = "transaction"
    PROMOTION = "promotion"


@dataclass_json
@dataclasses.dataclass
class MessagePropertyViberServiceMsg:
    category: Optional[MessagePropertyViberServiceMsgCategoryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    ttl: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl') }})
    
class MessagePropertyWhatsappPolicyEnum(str, Enum):
    FALLBACK = "fallback"
    DETERMINISTIC = "deterministic"


@dataclass_json
@dataclasses.dataclass
class MessagePropertyWhatsapp:
    locale: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    policy: Optional[MessagePropertyWhatsappPolicyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    

@dataclass_json
@dataclasses.dataclass
class MessageProperty:
    content: MessagePropertyContent = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    messenger: Optional[MessagePropertyMessenger] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messenger') }})
    viber_service_msg: Optional[MessagePropertyViberServiceMsg] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viber_service_msg') }})
    whatsapp: Optional[MessagePropertyWhatsapp] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('whatsapp') }})
    
