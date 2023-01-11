import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import product_sms_enum as shared_product_sms_enum
from ..shared import json_sms_outbound_with_body as shared_json_sms_outbound_with_body
from ..shared import request_status_enum as shared_request_status_enum
from ..shared import json_sms_inbound_with_body as shared_json_sms_inbound_with_body
from ..shared import direction_enum as shared_direction_enum
from ..shared import product_voice_enum as shared_product_voice_enum
from ..shared import csv_voice as shared_csv_voice
from ..shared import product_in_app_voice_enum as shared_product_in_app_voice_enum
from ..shared import csv_in_app_voice as shared_csv_in_app_voice
from ..shared import product_websocket_enum as shared_product_websocket_enum
from ..shared import csv_websockets as shared_csv_websockets
from ..shared import product_verify_enum as shared_product_verify_enum
from ..shared import csv_verify as shared_csv_verify
from ..shared import product_ni_enum as shared_product_ni_enum
from ..shared import csv_ni as shared_csv_ni
from ..shared import product_messages_enum as shared_product_messages_enum
from ..shared import csv_messages_outbound as shared_csv_messages_outbound
from ..shared import csv_messages_inbound as shared_csv_messages_inbound
from ..shared import product_asr_enum as shared_product_asr_enum
from ..shared import csv_asr as shared_csv_asr
from ..shared import product_conversations_enum as shared_product_conversations_enum
from ..shared import csv_conversations as shared_csv_conversations

class GetRecordsDirectionEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"

class GetRecordsProductEnum(str, Enum):
    SMS = "SMS"
    VOICE_CALL = "VOICE-CALL"
    VOICE_FAILED = "VOICE-FAILED"
    IN_APP_VOICE = "IN-APP-VOICE"
    WEBSOCKET_CALL = "WEBSOCKET-CALL"
    VERIFY_API = "VERIFY-API"
    NUMBER_INSIGHT = "NUMBER-INSIGHT"
    MESSAGES = "MESSAGES"
    ASR = "ASR"
    CONVERSATIONS = "CONVERSATIONS"
    REPORTS_USAGE = "REPORTS-USAGE"

class GetRecordsStatusEnum(str, Enum):
    DELIVERED = "delivered"
    EXPIRED = "expired"
    FAILED = "failed"
    REJECTED = "rejected"
    ACCEPTED = "accepted"
    BUFFERED = "buffered"
    UNKNOWN = "unknown"
    DELETED = "deleted"


@dataclasses.dataclass
class GetRecordsQueryParams:
    account_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'account_id', 'style': 'form', 'explode': True }})
    product: GetRecordsProductEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'product', 'style': 'form', 'explode': True }})
    date_end: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_end', 'style': 'form', 'explode': True }})
    date_start: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_start', 'style': 'form', 'explode': True }})
    direction: Optional[GetRecordsDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    include_message: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_message', 'style': 'form', 'explode': True }})
    show_concatenated: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'show_concatenated', 'style': 'form', 'explode': True }})
    status: Optional[GetRecordsStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRecordsSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class GetRecords200ApplicationJSON1LinksSelf:
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRecords200ApplicationJSON1Links:
    self: Optional[GetRecords200ApplicationJSON1LinksSelf] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
class GetRecords200ApplicationJSON1DirectionEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"


@dataclass_json
@dataclasses.dataclass
class GetRecords200ApplicationJSON1:
    r"""GetRecords200ApplicationJSON1
    SMS (Outbound)
    """
    
    links: Optional[GetRecords200ApplicationJSON1Links] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    direction: Optional[GetRecords200ApplicationJSON1DirectionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    ids_not_found: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids_not_found') }})
    include_message: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('include_message') }})
    items_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items_count') }})
    price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    product: Optional[shared_product_sms_enum.ProductSmsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    received_at: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('received_at'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    records: Optional[list[shared_json_sms_outbound_with_body.JSONSmsOutboundWithBody]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('records') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    request_status: Optional[shared_request_status_enum.RequestStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_status') }})
    show_concatenated: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_concatenated') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRecords200ApplicationJSON2LinksSelf:
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRecords200ApplicationJSON2Links:
    self: Optional[GetRecords200ApplicationJSON2LinksSelf] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
class GetRecords200ApplicationJSON2DirectionEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"


@dataclass_json
@dataclasses.dataclass
class GetRecords200ApplicationJSON2:
    r"""GetRecords200ApplicationJSON2
    SMS (Inbound)
    """
    
    links: Optional[GetRecords200ApplicationJSON2Links] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    direction: Optional[GetRecords200ApplicationJSON2DirectionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    ids_not_found: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids_not_found') }})
    include_message: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('include_message') }})
    items_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items_count') }})
    price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    product: Optional[shared_product_sms_enum.ProductSmsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    received_at: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('received_at'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    records: Optional[list[shared_json_sms_inbound_with_body.JSONSmsInboundWithBody]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('records') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    request_status: Optional[shared_request_status_enum.RequestStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_status') }})
    show_concatenated: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_concatenated') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRecords200ApplicationJSON3LinksSelf:
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRecords200ApplicationJSON3Links:
    self: Optional[GetRecords200ApplicationJSON3LinksSelf] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRecords200ApplicationJSON3:
    r"""GetRecords200ApplicationJSON3
    Voice Call
    """
    
    links: Optional[GetRecords200ApplicationJSON3Links] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    direction: Optional[shared_direction_enum.DirectionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    ids_not_found: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids_not_found') }})
    items_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items_count') }})
    price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    product: Optional[shared_product_voice_enum.ProductVoiceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    received_at: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('received_at'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    records: Optional[list[shared_csv_voice.CsvVoice]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('records') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    request_status: Optional[shared_request_status_enum.RequestStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_status') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRecords200ApplicationJSON4LinksSelf:
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRecords200ApplicationJSON4Links:
    self: Optional[GetRecords200ApplicationJSON4LinksSelf] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRecords200ApplicationJSON4:
    r"""GetRecords200ApplicationJSON4
    In App Voice
    """
    
    links: Optional[GetRecords200ApplicationJSON4Links] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    ids_not_found: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids_not_found') }})
    items_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items_count') }})
    price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    product: Optional[shared_product_in_app_voice_enum.ProductInAppVoiceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    received_at: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('received_at'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    records: Optional[list[shared_csv_in_app_voice.CsvInAppVoice]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('records') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    request_status: Optional[shared_request_status_enum.RequestStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_status') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRecords200ApplicationJSON5LinksSelf:
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRecords200ApplicationJSON5Links:
    self: Optional[GetRecords200ApplicationJSON5LinksSelf] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRecords200ApplicationJSON5:
    r"""GetRecords200ApplicationJSON5
    WebSocket Call
    """
    
    links: Optional[GetRecords200ApplicationJSON5Links] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    ids_not_found: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids_not_found') }})
    items_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items_count') }})
    price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    product: Optional[shared_product_websocket_enum.ProductWebsocketEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    received_at: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('received_at'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    records: Optional[list[shared_csv_websockets.CsvWebsockets]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('records') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    request_status: Optional[shared_request_status_enum.RequestStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_status') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRecords200ApplicationJSON6LinksSelf:
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRecords200ApplicationJSON6Links:
    self: Optional[GetRecords200ApplicationJSON6LinksSelf] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRecords200ApplicationJSON6:
    r"""GetRecords200ApplicationJSON6
    Verify
    """
    
    links: Optional[GetRecords200ApplicationJSON6Links] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    ids_not_found: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids_not_found') }})
    items_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items_count') }})
    price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    product: Optional[shared_product_verify_enum.ProductVerifyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    received_at: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('received_at'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    records: Optional[list[shared_csv_verify.CsvVerify]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('records') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    request_status: Optional[shared_request_status_enum.RequestStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_status') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRecords200ApplicationJSON7LinksSelf:
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRecords200ApplicationJSON7Links:
    self: Optional[GetRecords200ApplicationJSON7LinksSelf] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRecords200ApplicationJSON7:
    r"""GetRecords200ApplicationJSON7
    Number Insight
    """
    
    links: Optional[GetRecords200ApplicationJSON7Links] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    ids_not_found: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids_not_found') }})
    items_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items_count') }})
    price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    product: Optional[shared_product_ni_enum.ProductNiEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    received_at: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('received_at'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    records: Optional[list[shared_csv_ni.CsvNi]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('records') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    request_status: Optional[shared_request_status_enum.RequestStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_status') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRecords200ApplicationJSON8LinksSelf:
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRecords200ApplicationJSON8Links:
    self: Optional[GetRecords200ApplicationJSON8LinksSelf] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
class GetRecords200ApplicationJSON8DirectionEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"


@dataclass_json
@dataclasses.dataclass
class GetRecords200ApplicationJSON8:
    r"""GetRecords200ApplicationJSON8
    Messages (Outbound)
    """
    
    links: Optional[GetRecords200ApplicationJSON8Links] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    direction: Optional[GetRecords200ApplicationJSON8DirectionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    ids_not_found: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids_not_found') }})
    include_message: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('include_message') }})
    items_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items_count') }})
    price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    product: Optional[shared_product_messages_enum.ProductMessagesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    received_at: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('received_at'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    records: Optional[list[shared_csv_messages_outbound.CsvMessagesOutbound]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('records') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    request_status: Optional[shared_request_status_enum.RequestStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_status') }})
    show_concatenated: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_concatenated') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRecords200ApplicationJSON9LinksSelf:
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRecords200ApplicationJSON9Links:
    self: Optional[GetRecords200ApplicationJSON9LinksSelf] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
class GetRecords200ApplicationJSON9DirectionEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"


@dataclass_json
@dataclasses.dataclass
class GetRecords200ApplicationJSON9:
    r"""GetRecords200ApplicationJSON9
    Messages (Inbound)
    """
    
    links: Optional[GetRecords200ApplicationJSON9Links] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    direction: Optional[GetRecords200ApplicationJSON9DirectionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    ids_not_found: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids_not_found') }})
    include_message: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('include_message') }})
    items_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items_count') }})
    price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    product: Optional[shared_product_messages_enum.ProductMessagesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    received_at: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('received_at'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    records: Optional[list[shared_csv_messages_inbound.CsvMessagesInbound]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('records') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    request_status: Optional[shared_request_status_enum.RequestStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_status') }})
    show_concatenated: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_concatenated') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRecords200ApplicationJSON10LinksSelf:
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRecords200ApplicationJSON10Links:
    self: Optional[GetRecords200ApplicationJSON10LinksSelf] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRecords200ApplicationJSON10:
    r"""GetRecords200ApplicationJSON10
    ASR
    """
    
    links: Optional[GetRecords200ApplicationJSON10Links] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    ids_not_found: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids_not_found') }})
    items_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items_count') }})
    price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    product: Optional[shared_product_asr_enum.ProductAsrEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    received_at: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('received_at'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    records: Optional[list[shared_csv_asr.CsvAsr]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('records') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    request_status: Optional[shared_request_status_enum.RequestStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_status') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRecords200ApplicationJSON11LinksSelf:
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRecords200ApplicationJSON11Links:
    self: Optional[GetRecords200ApplicationJSON11LinksSelf] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRecords200ApplicationJSON11:
    r"""GetRecords200ApplicationJSON11
    Conversations
    """
    
    links: Optional[GetRecords200ApplicationJSON11Links] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    ids_not_found: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids_not_found') }})
    items_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items_count') }})
    price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    product: Optional[shared_product_conversations_enum.ProductConversationsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    received_at: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('received_at'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    records: Optional[list[shared_csv_conversations.CsvConversations]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('records') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    request_status: Optional[shared_request_status_enum.RequestStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_status') }})
    

@dataclasses.dataclass
class GetRecordsRequest:
    query_params: GetRecordsQueryParams = dataclasses.field()
    security: GetRecordsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetRecordsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_records_200_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    get_records_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_records_422_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
