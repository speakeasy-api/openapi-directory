"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class ExchangeReviewStatusExchangeEnum(str, Enum):
    r"""The exchange reviewing the creative."""
    EXCHANGE_UNSPECIFIED = 'EXCHANGE_UNSPECIFIED'
    EXCHANGE_GOOGLE_AD_MANAGER = 'EXCHANGE_GOOGLE_AD_MANAGER'
    EXCHANGE_APPNEXUS = 'EXCHANGE_APPNEXUS'
    EXCHANGE_BRIGHTROLL = 'EXCHANGE_BRIGHTROLL'
    EXCHANGE_ADFORM = 'EXCHANGE_ADFORM'
    EXCHANGE_ADMETA = 'EXCHANGE_ADMETA'
    EXCHANGE_ADMIXER = 'EXCHANGE_ADMIXER'
    EXCHANGE_ADSMOGO = 'EXCHANGE_ADSMOGO'
    EXCHANGE_ADSWIZZ = 'EXCHANGE_ADSWIZZ'
    EXCHANGE_BIDSWITCH = 'EXCHANGE_BIDSWITCH'
    EXCHANGE_BRIGHTROLL_DISPLAY = 'EXCHANGE_BRIGHTROLL_DISPLAY'
    EXCHANGE_CADREON = 'EXCHANGE_CADREON'
    EXCHANGE_DAILYMOTION = 'EXCHANGE_DAILYMOTION'
    EXCHANGE_FIVE = 'EXCHANGE_FIVE'
    EXCHANGE_FLUCT = 'EXCHANGE_FLUCT'
    EXCHANGE_FREEWHEEL = 'EXCHANGE_FREEWHEEL'
    EXCHANGE_GENIEE = 'EXCHANGE_GENIEE'
    EXCHANGE_GUMGUM = 'EXCHANGE_GUMGUM'
    EXCHANGE_IMOBILE = 'EXCHANGE_IMOBILE'
    EXCHANGE_IBILLBOARD = 'EXCHANGE_IBILLBOARD'
    EXCHANGE_IMPROVE_DIGITAL = 'EXCHANGE_IMPROVE_DIGITAL'
    EXCHANGE_INDEX = 'EXCHANGE_INDEX'
    EXCHANGE_KARGO = 'EXCHANGE_KARGO'
    EXCHANGE_MICROAD = 'EXCHANGE_MICROAD'
    EXCHANGE_MOPUB = 'EXCHANGE_MOPUB'
    EXCHANGE_NEND = 'EXCHANGE_NEND'
    EXCHANGE_ONE_BY_AOL_DISPLAY = 'EXCHANGE_ONE_BY_AOL_DISPLAY'
    EXCHANGE_ONE_BY_AOL_MOBILE = 'EXCHANGE_ONE_BY_AOL_MOBILE'
    EXCHANGE_ONE_BY_AOL_VIDEO = 'EXCHANGE_ONE_BY_AOL_VIDEO'
    EXCHANGE_OOYALA = 'EXCHANGE_OOYALA'
    EXCHANGE_OPENX = 'EXCHANGE_OPENX'
    EXCHANGE_PERMODO = 'EXCHANGE_PERMODO'
    EXCHANGE_PLATFORMONE = 'EXCHANGE_PLATFORMONE'
    EXCHANGE_PLATFORMID = 'EXCHANGE_PLATFORMID'
    EXCHANGE_PUBMATIC = 'EXCHANGE_PUBMATIC'
    EXCHANGE_PULSEPOINT = 'EXCHANGE_PULSEPOINT'
    EXCHANGE_REVENUEMAX = 'EXCHANGE_REVENUEMAX'
    EXCHANGE_RUBICON = 'EXCHANGE_RUBICON'
    EXCHANGE_SMARTCLIP = 'EXCHANGE_SMARTCLIP'
    EXCHANGE_SMARTRTB = 'EXCHANGE_SMARTRTB'
    EXCHANGE_SMARTSTREAMTV = 'EXCHANGE_SMARTSTREAMTV'
    EXCHANGE_SOVRN = 'EXCHANGE_SOVRN'
    EXCHANGE_SPOTXCHANGE = 'EXCHANGE_SPOTXCHANGE'
    EXCHANGE_STROER = 'EXCHANGE_STROER'
    EXCHANGE_TEADSTV = 'EXCHANGE_TEADSTV'
    EXCHANGE_TELARIA = 'EXCHANGE_TELARIA'
    EXCHANGE_TVN = 'EXCHANGE_TVN'
    EXCHANGE_UNITED = 'EXCHANGE_UNITED'
    EXCHANGE_YIELDLAB = 'EXCHANGE_YIELDLAB'
    EXCHANGE_YIELDMO = 'EXCHANGE_YIELDMO'
    EXCHANGE_UNRULYX = 'EXCHANGE_UNRULYX'
    EXCHANGE_OPEN8 = 'EXCHANGE_OPEN8'
    EXCHANGE_TRITON = 'EXCHANGE_TRITON'
    EXCHANGE_TRIPLELIFT = 'EXCHANGE_TRIPLELIFT'
    EXCHANGE_TABOOLA = 'EXCHANGE_TABOOLA'
    EXCHANGE_INMOBI = 'EXCHANGE_INMOBI'
    EXCHANGE_SMAATO = 'EXCHANGE_SMAATO'
    EXCHANGE_AJA = 'EXCHANGE_AJA'
    EXCHANGE_SUPERSHIP = 'EXCHANGE_SUPERSHIP'
    EXCHANGE_NEXSTAR_DIGITAL = 'EXCHANGE_NEXSTAR_DIGITAL'
    EXCHANGE_WAZE = 'EXCHANGE_WAZE'
    EXCHANGE_SOUNDCAST = 'EXCHANGE_SOUNDCAST'
    EXCHANGE_SHARETHROUGH = 'EXCHANGE_SHARETHROUGH'
    EXCHANGE_FYBER = 'EXCHANGE_FYBER'
    EXCHANGE_RED_FOR_PUBLISHERS = 'EXCHANGE_RED_FOR_PUBLISHERS'
    EXCHANGE_MEDIANET = 'EXCHANGE_MEDIANET'
    EXCHANGE_TAPJOY = 'EXCHANGE_TAPJOY'
    EXCHANGE_VISTAR = 'EXCHANGE_VISTAR'
    EXCHANGE_DAX = 'EXCHANGE_DAX'
    EXCHANGE_JCD = 'EXCHANGE_JCD'
    EXCHANGE_PLACE_EXCHANGE = 'EXCHANGE_PLACE_EXCHANGE'
    EXCHANGE_APPLOVIN = 'EXCHANGE_APPLOVIN'
    EXCHANGE_CONNATIX = 'EXCHANGE_CONNATIX'
    EXCHANGE_RESET_DIGITAL = 'EXCHANGE_RESET_DIGITAL'
    EXCHANGE_HIVESTACK = 'EXCHANGE_HIVESTACK'

class ExchangeReviewStatusStatusEnum(str, Enum):
    r"""Status of the exchange review."""
    REVIEW_STATUS_UNSPECIFIED = 'REVIEW_STATUS_UNSPECIFIED'
    REVIEW_STATUS_APPROVED = 'REVIEW_STATUS_APPROVED'
    REVIEW_STATUS_REJECTED = 'REVIEW_STATUS_REJECTED'
    REVIEW_STATUS_PENDING = 'REVIEW_STATUS_PENDING'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ExchangeReviewStatus:
    r"""Exchange review status for the creative."""
    
    exchange: Optional[ExchangeReviewStatusExchangeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('exchange'), 'exclude': lambda f: f is None }})
    r"""The exchange reviewing the creative."""  
    status: Optional[ExchangeReviewStatusStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status'), 'exclude': lambda f: f is None }})
    r"""Status of the exchange review."""  
    