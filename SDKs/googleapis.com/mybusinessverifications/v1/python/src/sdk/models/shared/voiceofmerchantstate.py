import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import complywithguidelines as shared_complywithguidelines
from ..shared import verify as shared_verify


@dataclass_json
@dataclasses.dataclass
class VoiceOfMerchantState:
    r"""VoiceOfMerchantState
    Response message for VoiceOfMerchant.GetVoiceOfMerchantState.
    """
    
    comply_with_guidelines: Optional[shared_complywithguidelines.ComplyWithGuidelines] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complyWithGuidelines') }})
    has_business_authority: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasBusinessAuthority') }})
    has_voice_of_merchant: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasVoiceOfMerchant') }})
    resolve_ownership_conflict: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolveOwnershipConflict') }})
    verify: Optional[shared_verify.Verify] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verify') }})
    wait_for_voice_of_merchant: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waitForVoiceOfMerchant') }})
    
