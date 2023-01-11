import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import conversion as shared_conversion
from ..shared import encryptioninfo as shared_encryptioninfo


@dataclass_json
@dataclasses.dataclass
class ConversionsBatchInsertRequest:
    r"""ConversionsBatchInsertRequest
    Insert Conversions Request.
    """
    
    conversions: Optional[list[shared_conversion.Conversion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversions') }})
    encryption_info: Optional[shared_encryptioninfo.EncryptionInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionInfo') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
