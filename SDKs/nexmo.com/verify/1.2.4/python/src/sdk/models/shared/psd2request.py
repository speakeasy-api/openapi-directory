import dataclasses
from typing import Optional
from enum import Enum

class Psd2RequestLgEnum(str, Enum):
    EN_GB = "en-gb"
    BG_BG = "bg-bg"
    CS_CZ = "cs-cz"
    DA_DK = "da-dk"
    DE_DE = "de-de"
    EE_ET = "ee-et"
    EL_GR = "el-gr"
    ES_ES = "es-es"
    FI_FI = "fi-fi"
    FR_FR = "fr-fr"
    GA_IE = "ga-ie"
    HU_HU = "hu-hu"
    IT_IT = "it-it"
    LV_LV = "lv-lv"
    LT_LT = "lt-lt"
    MT_MT = "mt-mt"
    NL_NL = "nl-nl"
    PL_PL = "pl-pl"
    SK_SK = "sk-sk"
    SL_SI = "sl-si"
    SV_SE = "sv-se"


@dataclasses.dataclass
class Psd2Request:
    amount: float = dataclasses.field(metadata={'form': { 'field_name': 'amount' }})
    api_key: str = dataclasses.field(metadata={'form': { 'field_name': 'api_key' }})
    api_secret: str = dataclasses.field(metadata={'form': { 'field_name': 'api_secret' }})
    number: str = dataclasses.field(metadata={'form': { 'field_name': 'number' }})
    payee: str = dataclasses.field(metadata={'form': { 'field_name': 'payee' }})
    code_length: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'code_length' }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'country' }})
    lg: Optional[Psd2RequestLgEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'lg' }})
    next_event_wait: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'next_event_wait' }})
    pin_expiry: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'pin_expiry' }})
    workflow_id: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'workflow_id' }})
    
