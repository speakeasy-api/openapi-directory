import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RtiTransactionBaseRtiTransactionBaseEmployerCore:
    r"""RtiTransactionBaseRtiTransactionBaseEmployerCore
    The rti transaction bases' employer core
    """
    
    at_href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@href') }})
    at_rel: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@rel') }})
    at_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@title') }})
    
class RtiTransactionBaseRtiTransactionBaseTransactionStatusEnum(str, Enum):
    NEW = "New"
    REQUEST_GENERATED = "RequestGenerated"
    COMPLETED_WITH_ERROR = "CompletedWithError"
    COMPLETED_WITH_SUCCESS = "CompletedWithSuccess"
    TIME_OUT = "TimeOut"


@dataclass_json
@dataclasses.dataclass
class RtiTransactionBaseRtiTransactionBase:
    employer_core: Optional[RtiTransactionBaseRtiTransactionBaseEmployerCore] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmployerCore') }})
    request_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestData') }})
    response_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResponseData') }})
    rti_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RtiType') }})
    tax_year: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxYear') }})
    timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transaction_status: Optional[RtiTransactionBaseRtiTransactionBaseTransactionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransactionStatus') }})
    transmission_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransmissionDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class RtiTransactionBase:
    rti_transaction_base: Optional[RtiTransactionBaseRtiTransactionBase] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RtiTransactionBase') }})
    
