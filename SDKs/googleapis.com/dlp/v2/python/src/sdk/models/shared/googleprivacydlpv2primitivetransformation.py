import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2bucketingconfig as shared_googleprivacydlpv2bucketingconfig
from ..shared import googleprivacydlpv2charactermaskconfig as shared_googleprivacydlpv2charactermaskconfig
from ..shared import googleprivacydlpv2cryptodeterministicconfig as shared_googleprivacydlpv2cryptodeterministicconfig
from ..shared import googleprivacydlpv2cryptohashconfig as shared_googleprivacydlpv2cryptohashconfig
from ..shared import googleprivacydlpv2cryptoreplaceffxfpeconfig as shared_googleprivacydlpv2cryptoreplaceffxfpeconfig
from ..shared import googleprivacydlpv2dateshiftconfig as shared_googleprivacydlpv2dateshiftconfig
from ..shared import googleprivacydlpv2fixedsizebucketingconfig as shared_googleprivacydlpv2fixedsizebucketingconfig
from ..shared import googleprivacydlpv2replacevalueconfig as shared_googleprivacydlpv2replacevalueconfig
from ..shared import googleprivacydlpv2replacedictionaryconfig as shared_googleprivacydlpv2replacedictionaryconfig
from ..shared import googleprivacydlpv2timepartconfig as shared_googleprivacydlpv2timepartconfig


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2PrimitiveTransformation:
    r"""GooglePrivacyDlpV2PrimitiveTransformation
    A rule for transforming a value.
    """
    
    bucketing_config: Optional[shared_googleprivacydlpv2bucketingconfig.GooglePrivacyDlpV2BucketingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketingConfig') }})
    character_mask_config: Optional[shared_googleprivacydlpv2charactermaskconfig.GooglePrivacyDlpV2CharacterMaskConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('characterMaskConfig') }})
    crypto_deterministic_config: Optional[shared_googleprivacydlpv2cryptodeterministicconfig.GooglePrivacyDlpV2CryptoDeterministicConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cryptoDeterministicConfig') }})
    crypto_hash_config: Optional[shared_googleprivacydlpv2cryptohashconfig.GooglePrivacyDlpV2CryptoHashConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cryptoHashConfig') }})
    crypto_replace_ffx_fpe_config: Optional[shared_googleprivacydlpv2cryptoreplaceffxfpeconfig.GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cryptoReplaceFfxFpeConfig') }})
    date_shift_config: Optional[shared_googleprivacydlpv2dateshiftconfig.GooglePrivacyDlpV2DateShiftConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateShiftConfig') }})
    fixed_size_bucketing_config: Optional[shared_googleprivacydlpv2fixedsizebucketingconfig.GooglePrivacyDlpV2FixedSizeBucketingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedSizeBucketingConfig') }})
    redact_config: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redactConfig') }})
    replace_config: Optional[shared_googleprivacydlpv2replacevalueconfig.GooglePrivacyDlpV2ReplaceValueConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replaceConfig') }})
    replace_dictionary_config: Optional[shared_googleprivacydlpv2replacedictionaryconfig.GooglePrivacyDlpV2ReplaceDictionaryConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replaceDictionaryConfig') }})
    replace_with_info_type_config: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replaceWithInfoTypeConfig') }})
    time_part_config: Optional[shared_googleprivacydlpv2timepartconfig.GooglePrivacyDlpV2TimePartConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timePartConfig') }})
    
