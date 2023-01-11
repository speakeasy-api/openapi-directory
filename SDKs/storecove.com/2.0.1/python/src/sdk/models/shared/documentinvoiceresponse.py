import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import invoiceresponseclarification as shared_invoiceresponseclarification

class DocumentInvoiceResponseResponseCodeEnum(str, Enum):
    AB = "AB"
    IP = "IP"
    UQ = "UQ"
    RE = "RE"
    AP = "AP"
    PD = "PD"


@dataclass_json
@dataclasses.dataclass
class DocumentInvoiceResponse:
    r"""DocumentInvoiceResponse
    The invoice response to send.
    """
    
    response_code: DocumentInvoiceResponseResponseCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseCode') }})
    clarifications: Optional[list[shared_invoiceresponseclarification.InvoiceResponseClarification]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clarifications') }})
    effective_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveDate') }})
    note: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    
