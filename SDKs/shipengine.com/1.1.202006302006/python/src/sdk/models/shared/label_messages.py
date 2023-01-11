import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LabelMessages:
    r"""LabelMessages
    Custom messages to print on the shipping label for the package.  These are typically used to print invoice numbers, product numbers, or other internal reference numbers.  Not all carriers support label messages. The number of lines and the maximum length of each line also varies by carrier.
    
    |Carrier            |Max lines |Max line length
    |-------------------|----------|--------------------
    |USPS (Stamps.com)  |3         |60
    |FedEx              |3         |35 for the first line. 30 for additional lines.
    |UPS                |2         |35
    |OnTrac             |2         |25
    
    """
    
    reference1: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference1') }})
    reference2: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference2') }})
    reference3: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference3') }})
    
