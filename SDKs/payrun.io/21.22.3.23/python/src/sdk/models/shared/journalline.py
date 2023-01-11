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
class JournalLineJournalLineEmployee:
    r"""JournalLineJournalLineEmployee
    The journal lines' employee
    """
    
    at_href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@href') }})
    at_rel: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@rel') }})
    at_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@title') }})
    
class JournalLineJournalLinePayFrequencyEnum(str, Enum):
    WEEKLY = "Weekly"
    MONTHLY = "Monthly"
    TWO_WEEKLY = "TwoWeekly"
    FOUR_WEEKLY = "FourWeekly"
    YEARLY = "Yearly"


@dataclass_json
@dataclasses.dataclass
class JournalLineJournalLinePayRun:
    r"""JournalLineJournalLinePayRun
    The journal lines' pay run
    """
    
    at_href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@href') }})
    at_rel: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@rel') }})
    at_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@title') }})
    

@dataclass_json
@dataclasses.dataclass
class JournalLineJournalLineSubContractor:
    r"""JournalLineJournalLineSubContractor
    The journal lines' sub contractor
    """
    
    at_href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@href') }})
    at_rel: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@rel') }})
    at_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@title') }})
    

@dataclass_json
@dataclasses.dataclass
class JournalLineJournalLine:
    credit: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Credit') }})
    debit: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Debit') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    employee: Optional[JournalLineJournalLineEmployee] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Employee') }})
    generated: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Generated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    grouping: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Grouping') }})
    ledger_target: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LedgerTarget') }})
    nom_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NomCode') }})
    pay_frequency: Optional[JournalLineJournalLinePayFrequencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayFrequency') }})
    pay_run: Optional[JournalLineJournalLinePayRun] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayRun') }})
    sub_contractor: Optional[JournalLineJournalLineSubContractor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubContractor') }})
    sub_nom_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubNomCode') }})
    tax_period: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxPeriod') }})
    tax_year: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxYear') }})
    

@dataclass_json
@dataclasses.dataclass
class JournalLine:
    journal_line: Optional[JournalLineJournalLine] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JournalLine') }})
    
