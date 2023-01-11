import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import errorinternal as shared_errorinternal
from ..shared import errorpaymentrequired as shared_errorpaymentrequired
from ..shared import errorthrottled as shared_errorthrottled
from ..shared import errorunauthorizedmissingcredentials as shared_errorunauthorizedmissingcredentials
from ..shared import errorunauthorizedinvalidapplication as shared_errorunauthorizedinvalidapplication
from ..shared import errorinvalidjson as shared_errorinvalidjson
from ..shared import errorchannel as shared_errorchannel
from ..shared import errorchannelparams as shared_errorchannelparams
from ..shared import errorsender as shared_errorsender
from ..shared import errorrecipient as shared_errorrecipient
from ..shared import errormessagetype as shared_errormessagetype
from ..shared import errormessageparams as shared_errormessageparams
from ..shared import errorclientreference as shared_errorclientreference

class SendMessageRequestBody1TextChannelEnum(str, Enum):
    SMS = "sms"

class SendMessageRequestBody1TextMessageTypeEnum(str, Enum):
    TEXT = "text"


@dataclass_json
@dataclasses.dataclass
class SendMessageRequestBody1Text:
    r"""SendMessageRequestBody1Text
    The text of message to send.
    """
    
    channel: SendMessageRequestBody1TextChannelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    from_: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    message_type: SendMessageRequestBody1TextMessageTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message_type') }})
    text: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    to: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    client_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_ref') }})
    
class SendMessageRequestBody2ImageChannelEnum(str, Enum):
    MMS = "mms"

class SendMessageRequestBody2ImageMessageTypeEnum(str, Enum):
    IMAGE = "image"


@dataclass_json
@dataclasses.dataclass
class SendMessageRequestBody2Image:
    channel: SendMessageRequestBody2ImageChannelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    from_: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    image: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    message_type: SendMessageRequestBody2ImageMessageTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message_type') }})
    to: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    client_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_ref') }})
    
class SendMessageRequestBody2VCardChannelEnum(str, Enum):
    MMS = "mms"

class SendMessageRequestBody2VCardMessageTypeEnum(str, Enum):
    VCARD = "vcard"


@dataclass_json
@dataclasses.dataclass
class SendMessageRequestBody2VCard:
    channel: SendMessageRequestBody2VCardChannelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    from_: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    message_type: SendMessageRequestBody2VCardMessageTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message_type') }})
    to: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    vcard: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcard') }})
    client_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_ref') }})
    
class SendMessageRequestBody2AudioChannelEnum(str, Enum):
    MMS = "mms"

class SendMessageRequestBody2AudioMessageTypeEnum(str, Enum):
    AUDIO = "audio"


@dataclass_json
@dataclasses.dataclass
class SendMessageRequestBody2Audio:
    audio: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio') }})
    channel: SendMessageRequestBody2AudioChannelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    from_: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    message_type: SendMessageRequestBody2AudioMessageTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message_type') }})
    to: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    client_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_ref') }})
    
class SendMessageRequestBody2VideoChannelEnum(str, Enum):
    MMS = "mms"

class SendMessageRequestBody2VideoMessageTypeEnum(str, Enum):
    VIDEO = "video"


@dataclass_json
@dataclasses.dataclass
class SendMessageRequestBody2Video:
    channel: SendMessageRequestBody2VideoChannelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    from_: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    message_type: SendMessageRequestBody2VideoMessageTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message_type') }})
    to: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    video: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('video') }})
    client_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_ref') }})
    
class SendMessageRequestBody3TextChannelEnum(str, Enum):
    WHATSAPP = "whatsapp"

class SendMessageRequestBody3TextMessageTypeEnum(str, Enum):
    TEXT = "text"


@dataclass_json
@dataclasses.dataclass
class SendMessageRequestBody3Text:
    r"""SendMessageRequestBody3Text
    The text of message to send.
    """
    
    channel: SendMessageRequestBody3TextChannelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    from_: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    message_type: SendMessageRequestBody3TextMessageTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message_type') }})
    text: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    to: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    client_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_ref') }})
    
class SendMessageRequestBody3LocationChannelEnum(str, Enum):
    WHATSAPP = "whatsapp"


@dataclass_json
@dataclasses.dataclass
class SendMessageRequestBody3LocationLocation:
    lat: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    long: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('long') }})
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class SendMessageRequestBody3LocationMessageTypeEnum(str, Enum):
    LOCATION = "location"


@dataclass_json
@dataclasses.dataclass
class SendMessageRequestBody3Location:
    channel: SendMessageRequestBody3LocationChannelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    from_: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    location: SendMessageRequestBody3LocationLocation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    message_type: SendMessageRequestBody3LocationMessageTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message_type') }})
    to: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    client_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_ref') }})
    text: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
class SendMessageRequestBody3ImageChannelEnum(str, Enum):
    WHATSAPP = "whatsapp"

class SendMessageRequestBody3ImageMessageTypeEnum(str, Enum):
    IMAGE = "image"


@dataclass_json
@dataclasses.dataclass
class SendMessageRequestBody3Image:
    channel: SendMessageRequestBody3ImageChannelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    from_: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    image: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    message_type: SendMessageRequestBody3ImageMessageTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message_type') }})
    to: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    client_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_ref') }})
    
class SendMessageRequestBody3AudioChannelEnum(str, Enum):
    WHATSAPP = "whatsapp"

class SendMessageRequestBody3AudioMessageTypeEnum(str, Enum):
    AUDIO = "audio"


@dataclass_json
@dataclasses.dataclass
class SendMessageRequestBody3Audio:
    audio: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio') }})
    channel: SendMessageRequestBody3AudioChannelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    from_: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    message_type: SendMessageRequestBody3AudioMessageTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message_type') }})
    to: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    client_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_ref') }})
    
class SendMessageRequestBody3VideoChannelEnum(str, Enum):
    WHATSAPP = "whatsapp"

class SendMessageRequestBody3VideoMessageTypeEnum(str, Enum):
    VIDEO = "video"


@dataclass_json
@dataclasses.dataclass
class SendMessageRequestBody3Video:
    channel: SendMessageRequestBody3VideoChannelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    from_: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    message_type: SendMessageRequestBody3VideoMessageTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message_type') }})
    to: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    video: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('video') }})
    client_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_ref') }})
    
class SendMessageRequestBody3FileChannelEnum(str, Enum):
    WHATSAPP = "whatsapp"

class SendMessageRequestBody3FileMessageTypeEnum(str, Enum):
    FILE = "file"


@dataclass_json
@dataclasses.dataclass
class SendMessageRequestBody3File:
    channel: SendMessageRequestBody3FileChannelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    file: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('file') }})
    from_: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    message_type: SendMessageRequestBody3FileMessageTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message_type') }})
    to: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    client_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_ref') }})
    
class SendMessageRequestBody3TemplateChannelEnum(str, Enum):
    WHATSAPP = "whatsapp"

class SendMessageRequestBody3TemplateMessageTypeEnum(str, Enum):
    TEMPLATE = "template"


@dataclass_json
@dataclasses.dataclass
class SendMessageRequestBody3TemplateTemplate:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parameters: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    
class SendMessageRequestBody3TemplateWhatsappPolicyEnum(str, Enum):
    DETERMINISTIC = "deterministic"


@dataclass_json
@dataclasses.dataclass
class SendMessageRequestBody3TemplateWhatsapp:
    locale: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    policy: Optional[SendMessageRequestBody3TemplateWhatsappPolicyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    

@dataclass_json
@dataclasses.dataclass
class SendMessageRequestBody3Template:
    channel: SendMessageRequestBody3TemplateChannelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    from_: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    message_type: SendMessageRequestBody3TemplateMessageTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message_type') }})
    template: SendMessageRequestBody3TemplateTemplate = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    to: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    whatsapp: SendMessageRequestBody3TemplateWhatsapp = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('whatsapp') }})
    client_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_ref') }})
    
class SendMessageRequestBody3CustomChannelEnum(str, Enum):
    WHATSAPP = "whatsapp"

class SendMessageRequestBody3CustomMessageTypeEnum(str, Enum):
    CUSTOM = "custom"


@dataclass_json
@dataclasses.dataclass
class SendMessageRequestBody3Custom:
    channel: SendMessageRequestBody3CustomChannelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    from_: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    message_type: SendMessageRequestBody3CustomMessageTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message_type') }})
    to: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    client_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_ref') }})
    custom: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom') }})
    
class SendMessageRequestBody4TextChannelEnum(str, Enum):
    MESSENGER = "messenger"

class SendMessageRequestBody4TextMessageTypeEnum(str, Enum):
    TEXT = "text"

class SendMessageRequestBody4TextMessengerCategoryEnum(str, Enum):
    RESPONSE = "response"
    UPDATE = "update"
    MESSAGE_TAG = "message_tag"


@dataclass_json
@dataclasses.dataclass
class SendMessageRequestBody4TextMessenger:
    category: Optional[SendMessageRequestBody4TextMessengerCategoryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    

@dataclass_json
@dataclasses.dataclass
class SendMessageRequestBody4Text:
    r"""SendMessageRequestBody4Text
    The text of message to send.
    """
    
    channel: SendMessageRequestBody4TextChannelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    from_: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    message_type: SendMessageRequestBody4TextMessageTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message_type') }})
    text: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    to: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    client_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_ref') }})
    messenger: Optional[SendMessageRequestBody4TextMessenger] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messenger') }})
    
class SendMessageRequestBody4ImageChannelEnum(str, Enum):
    MESSENGER = "messenger"

class SendMessageRequestBody4ImageMessageTypeEnum(str, Enum):
    IMAGE = "image"

class SendMessageRequestBody4ImageMessengerCategoryEnum(str, Enum):
    RESPONSE = "response"
    UPDATE = "update"
    MESSAGE_TAG = "message_tag"


@dataclass_json
@dataclasses.dataclass
class SendMessageRequestBody4ImageMessenger:
    category: Optional[SendMessageRequestBody4ImageMessengerCategoryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    

@dataclass_json
@dataclasses.dataclass
class SendMessageRequestBody4Image:
    channel: SendMessageRequestBody4ImageChannelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    from_: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    image: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    message_type: SendMessageRequestBody4ImageMessageTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message_type') }})
    to: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    client_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_ref') }})
    messenger: Optional[SendMessageRequestBody4ImageMessenger] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messenger') }})
    
class SendMessageRequestBody4AudioChannelEnum(str, Enum):
    MESSENGER = "messenger"

class SendMessageRequestBody4AudioMessageTypeEnum(str, Enum):
    AUDIO = "audio"

class SendMessageRequestBody4AudioMessengerCategoryEnum(str, Enum):
    RESPONSE = "response"
    UPDATE = "update"
    MESSAGE_TAG = "message_tag"


@dataclass_json
@dataclasses.dataclass
class SendMessageRequestBody4AudioMessenger:
    category: Optional[SendMessageRequestBody4AudioMessengerCategoryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    

@dataclass_json
@dataclasses.dataclass
class SendMessageRequestBody4Audio:
    audio: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio') }})
    channel: SendMessageRequestBody4AudioChannelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    from_: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    message_type: SendMessageRequestBody4AudioMessageTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message_type') }})
    to: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    client_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_ref') }})
    messenger: Optional[SendMessageRequestBody4AudioMessenger] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messenger') }})
    
class SendMessageRequestBody4VideoChannelEnum(str, Enum):
    MESSENGER = "messenger"

class SendMessageRequestBody4VideoMessageTypeEnum(str, Enum):
    VIDEO = "video"

class SendMessageRequestBody4VideoMessengerCategoryEnum(str, Enum):
    RESPONSE = "response"
    UPDATE = "update"
    MESSAGE_TAG = "message_tag"


@dataclass_json
@dataclasses.dataclass
class SendMessageRequestBody4VideoMessenger:
    category: Optional[SendMessageRequestBody4VideoMessengerCategoryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    

@dataclass_json
@dataclasses.dataclass
class SendMessageRequestBody4Video:
    channel: SendMessageRequestBody4VideoChannelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    from_: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    message_type: SendMessageRequestBody4VideoMessageTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message_type') }})
    to: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    video: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('video') }})
    client_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_ref') }})
    messenger: Optional[SendMessageRequestBody4VideoMessenger] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messenger') }})
    
class SendMessageRequestBody4FileChannelEnum(str, Enum):
    MESSENGER = "messenger"

class SendMessageRequestBody4FileMessageTypeEnum(str, Enum):
    FILE = "file"

class SendMessageRequestBody4FileMessengerCategoryEnum(str, Enum):
    RESPONSE = "response"
    UPDATE = "update"
    MESSAGE_TAG = "message_tag"


@dataclass_json
@dataclasses.dataclass
class SendMessageRequestBody4FileMessenger:
    category: Optional[SendMessageRequestBody4FileMessengerCategoryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    

@dataclass_json
@dataclasses.dataclass
class SendMessageRequestBody4File:
    channel: SendMessageRequestBody4FileChannelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    file: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('file') }})
    from_: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    message_type: SendMessageRequestBody4FileMessageTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message_type') }})
    to: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    client_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_ref') }})
    messenger: Optional[SendMessageRequestBody4FileMessenger] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messenger') }})
    
class SendMessageRequestBody5TextChannelEnum(str, Enum):
    VIBER_SERVICE = "viber_service"

class SendMessageRequestBody5TextMessageTypeEnum(str, Enum):
    TEXT = "text"

class SendMessageRequestBody5TextViberServiceCategoryEnum(str, Enum):
    TRANSACTION = "transaction"
    PROMOTION = "promotion"


@dataclass_json
@dataclasses.dataclass
class SendMessageRequestBody5TextViberService:
    category: Optional[SendMessageRequestBody5TextViberServiceCategoryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    ttl: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class SendMessageRequestBody5Text:
    r"""SendMessageRequestBody5Text
    The text of message to send.
    """
    
    channel: SendMessageRequestBody5TextChannelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    from_: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    message_type: SendMessageRequestBody5TextMessageTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message_type') }})
    text: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    to: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    client_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_ref') }})
    viber_service: Optional[SendMessageRequestBody5TextViberService] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viber_service') }})
    
class SendMessageRequestBody5ImageChannelEnum(str, Enum):
    VIBER_SERVICE = "viber_service"

class SendMessageRequestBody5ImageMessageTypeEnum(str, Enum):
    IMAGE = "image"

class SendMessageRequestBody5ImageViberServiceCategoryEnum(str, Enum):
    TRANSACTION = "transaction"
    PROMOTION = "promotion"


@dataclass_json
@dataclasses.dataclass
class SendMessageRequestBody5ImageViberService:
    category: Optional[SendMessageRequestBody5ImageViberServiceCategoryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    ttl: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class SendMessageRequestBody5Image:
    channel: SendMessageRequestBody5ImageChannelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    from_: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    image: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    message_type: SendMessageRequestBody5ImageMessageTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message_type') }})
    to: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    client_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_ref') }})
    viber_service: Optional[SendMessageRequestBody5ImageViberService] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viber_service') }})
    

@dataclasses.dataclass
class SendMessageSecurity:
    basic_auth: Optional[shared_security.SchemeBasicAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    bearer_auth: Optional[shared_security.SchemeBearerAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class SendMessageRequest:
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: SendMessageSecurity = dataclasses.field()
    

@dataclasses.dataclass
class SendMessageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_internal: Optional[shared_errorinternal.ErrorInternal] = dataclasses.field(default=None)
    error_payment_required: Optional[shared_errorpaymentrequired.ErrorPaymentRequired] = dataclasses.field(default=None)
    error_throttled: Optional[shared_errorthrottled.ErrorThrottled] = dataclasses.field(default=None)
    send_message_202_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    send_message_401_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    send_message_422_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
