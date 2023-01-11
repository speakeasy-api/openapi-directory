import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2infotypedescription as shared_googleprivacydlpv2infotypedescription


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2ListInfoTypesResponse:
    r"""GooglePrivacyDlpV2ListInfoTypesResponse
    Response to the ListInfoTypes request.
    """
    
    info_types: Optional[list[shared_googleprivacydlpv2infotypedescription.GooglePrivacyDlpV2InfoTypeDescription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoTypes') }})
    
