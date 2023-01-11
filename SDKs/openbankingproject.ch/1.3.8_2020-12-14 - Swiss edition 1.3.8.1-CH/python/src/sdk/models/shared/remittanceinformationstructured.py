import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RemittanceInformationStructuredScoRorQrRorIpiEnum(str, Enum):
    SCOR = "SCOR"
    QRR = "QRR"
    IPI = "IPI"


@dataclass_json
@dataclasses.dataclass
class RemittanceInformationStructured:
    r"""RemittanceInformationStructured
    Structured remittance information.
    
    """
    
    reference: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference') }})
    sco_ror_qr_ror_ipi: Optional[RemittanceInformationStructuredScoRorQrRorIpiEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SCORorQRRorIPI') }})
    additional_remittance_information: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalRemittanceInformation') }})
    reference_issuer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referenceIssuer') }})
    reference_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referenceType') }})
    
