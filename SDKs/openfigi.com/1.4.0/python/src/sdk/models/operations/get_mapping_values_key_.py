import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetMappingValuesKeyKeyEnum(str, Enum):
    ID_TYPE = "idType"
    EXCH_CODE = "exchCode"
    MIC_CODE = "micCode"
    CURRENCY = "currency"
    MARKET_SEC_DES = "marketSecDes"
    SECURITY_TYPE = "securityType"
    SECURITY_TYPE2 = "securityType2"


@dataclasses.dataclass
class GetMappingValuesKeyPathParams:
    key: GetMappingValuesKeyKeyEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetMappingValuesKey200ApplicationJSON:
    values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    

@dataclasses.dataclass
class GetMappingValuesKeyRequest:
    path_params: GetMappingValuesKeyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMappingValuesKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_mapping_values_key_200_application_json_object: Optional[GetMappingValuesKey200ApplicationJSON] = dataclasses.field(default=None)
    get_mapping_values_key_400_wildcard_string: Optional[str] = dataclasses.field(default=None)
    get_mapping_values_key_500_wildcard_string: Optional[str] = dataclasses.field(default=None)
    
