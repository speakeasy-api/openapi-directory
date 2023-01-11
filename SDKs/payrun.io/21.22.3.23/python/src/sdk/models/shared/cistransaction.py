import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CisTransactionCisTransactionCisMessageTypeEnum(str, Enum):
    VERIFICATION = "Verification"
    RETURN = "Return"


@dataclass_json
@dataclasses.dataclass
class CisTransactionCisTransactionEmployerCore:
    r"""CisTransactionCisTransactionEmployerCore
    The cis transactions' employer core
    """
    
    at_href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@href') }})
    at_rel: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@rel') }})
    at_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@title') }})
    
class CisTransactionCisTransactionTransactionStatusEnum(str, Enum):
    NEW = "New"
    REQUEST_GENERATED = "RequestGenerated"
    COMPLETED_WITH_ERROR = "CompletedWithError"
    COMPLETED_WITH_SUCCESS = "CompletedWithSuccess"
    TIME_OUT = "TimeOut"


@dataclass_json
@dataclasses.dataclass
class CisTransactionCisTransaction:
    cis_message_type: Optional[CisTransactionCisTransactionCisMessageTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CisMessageType') }})
    employer_core: Optional[CisTransactionCisTransactionEmployerCore] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmployerCore') }})
    request_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestData') }})
    response_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResponseData') }})
    tax_year: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxYear') }})
    timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transaction_status: Optional[CisTransactionCisTransactionTransactionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransactionStatus') }})
    transmission_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransmissionDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class CisTransaction:
    cis_transaction: Optional[CisTransactionCisTransaction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CisTransaction') }})
    
