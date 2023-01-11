import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class NumberDetailsUpdateMessagesCallbackTypeEnum(str, Enum):
    APP = "app"

class NumberDetailsUpdateVoiceCallbackTypeEnum(str, Enum):
    SIP = "sip"
    TEL = "tel"
    APP = "app"


@dataclasses.dataclass
class NumberDetailsUpdate:
    country: str = dataclasses.field(metadata={'form': { 'field_name': 'country' }})
    msisdn: str = dataclasses.field(metadata={'form': { 'field_name': 'msisdn' }})
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'app_id' }})
    messages_callback_type: Optional[NumberDetailsUpdateMessagesCallbackTypeEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'messagesCallbackType' }})
    messages_callback_value: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'messagesCallbackValue' }})
    mo_http_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'moHttpUrl' }})
    mo_smpp_sys_type: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'moSmppSysType' }})
    voice_callback_type: Optional[NumberDetailsUpdateVoiceCallbackTypeEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'voiceCallbackType' }})
    voice_callback_value: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'voiceCallbackValue' }})
    voice_status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'voiceStatusCallback' }})
    
