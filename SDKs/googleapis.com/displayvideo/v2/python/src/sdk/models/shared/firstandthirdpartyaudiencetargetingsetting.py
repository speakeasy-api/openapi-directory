"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class FirstAndThirdPartyAudienceTargetingSettingRecencyEnum(str, Enum):
    r"""The recency of the first and third party audience targeting setting. Only applicable to first party audiences, otherwise will be ignored. For more info, refer to https://support.google.com/displayvideo/answer/2949947#recency When unspecified, no recency limit will be used."""
    RECENCY_NO_LIMIT = 'RECENCY_NO_LIMIT'
    RECENCY_1_MINUTE = 'RECENCY_1_MINUTE'
    RECENCY_5_MINUTES = 'RECENCY_5_MINUTES'
    RECENCY_10_MINUTES = 'RECENCY_10_MINUTES'
    RECENCY_15_MINUTES = 'RECENCY_15_MINUTES'
    RECENCY_30_MINUTES = 'RECENCY_30_MINUTES'
    RECENCY_1_HOUR = 'RECENCY_1_HOUR'
    RECENCY_2_HOURS = 'RECENCY_2_HOURS'
    RECENCY_3_HOURS = 'RECENCY_3_HOURS'
    RECENCY_6_HOURS = 'RECENCY_6_HOURS'
    RECENCY_12_HOURS = 'RECENCY_12_HOURS'
    RECENCY_1_DAY = 'RECENCY_1_DAY'
    RECENCY_2_DAYS = 'RECENCY_2_DAYS'
    RECENCY_3_DAYS = 'RECENCY_3_DAYS'
    RECENCY_5_DAYS = 'RECENCY_5_DAYS'
    RECENCY_7_DAYS = 'RECENCY_7_DAYS'
    RECENCY_10_DAYS = 'RECENCY_10_DAYS'
    RECENCY_14_DAYS = 'RECENCY_14_DAYS'
    RECENCY_15_DAYS = 'RECENCY_15_DAYS'
    RECENCY_21_DAYS = 'RECENCY_21_DAYS'
    RECENCY_28_DAYS = 'RECENCY_28_DAYS'
    RECENCY_30_DAYS = 'RECENCY_30_DAYS'
    RECENCY_40_DAYS = 'RECENCY_40_DAYS'
    RECENCY_45_DAYS = 'RECENCY_45_DAYS'
    RECENCY_60_DAYS = 'RECENCY_60_DAYS'
    RECENCY_90_DAYS = 'RECENCY_90_DAYS'
    RECENCY_120_DAYS = 'RECENCY_120_DAYS'
    RECENCY_180_DAYS = 'RECENCY_180_DAYS'
    RECENCY_270_DAYS = 'RECENCY_270_DAYS'
    RECENCY_365_DAYS = 'RECENCY_365_DAYS'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class FirstAndThirdPartyAudienceTargetingSetting:
    r"""Details of first and third party audience targeting setting."""
    
    first_and_third_party_audience_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('firstAndThirdPartyAudienceId'), 'exclude': lambda f: f is None }})
    r"""Required. First and third party audience id of the first and third party audience targeting setting. This id is first_and_third_party_audience_id."""  
    recency: Optional[FirstAndThirdPartyAudienceTargetingSettingRecencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('recency'), 'exclude': lambda f: f is None }})
    r"""The recency of the first and third party audience targeting setting. Only applicable to first party audiences, otherwise will be ignored. For more info, refer to https://support.google.com/displayvideo/answer/2949947#recency When unspecified, no recency limit will be used."""  
    