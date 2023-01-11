import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimensions as shared_dimensions
from ..shared import error as shared_error


@dataclass_json
@dataclasses.dataclass
class GetCarriersResponseBodyCarrierCarrierAdvancedOption:
    r"""GetCarriersResponseBodyCarrierCarrierAdvancedOption
    Advanced options that are specific to the carrier
    """
    
    default_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_value') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetCarriersResponseBodyCarrierPackageType:
    r"""GetCarriersResponseBodyCarrierPackageType
    A package type that a carrier supports for shipment.
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    package_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('package_code') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    dimensions: Optional[shared_dimensions.Dimensions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    package_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('package_id') }})
    

@dataclass_json
@dataclasses.dataclass
class GetCarriersResponseBodyCarrierService:
    r"""GetCarriersResponseBodyCarrierService
    A service offered by the carrier
    """
    
    carrier_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier_code') }})
    carrier_id: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier_id') }})
    domestic: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domestic') }})
    international: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('international') }})
    is_multi_package_supported: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_multi_package_supported') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    service_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_code') }})
    

@dataclass_json
@dataclasses.dataclass
class GetCarriersResponseBodyCarrier:
    r"""GetCarriersResponseBodyCarrier
    A carrier object that represents a provider such as UPS, USPS, DHL, etc
    that has been tied to the current account.
    
    """
    
    account_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_number') }})
    balance: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    carrier_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier_code') }})
    carrier_id: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier_id') }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('friendly_name') }})
    has_multi_package_supporting_services: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_multi_package_supporting_services') }})
    nickname: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nickname') }})
    options: Optional[list[GetCarriersResponseBodyCarrierCarrierAdvancedOption]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    packages: Optional[list[GetCarriersResponseBodyCarrierPackageType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packages') }})
    primary: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    requires_funded_amount: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requires_funded_amount') }})
    services: Optional[list[GetCarriersResponseBodyCarrierService]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    supports_label_messages: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supports_label_messages') }})
    

@dataclass_json
@dataclasses.dataclass
class GetCarriersResponseBody:
    r"""GetCarriersResponseBody
    An error response body
    """
    
    carriers: list[GetCarriersResponseBodyCarrier] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('carriers') }})
    errors: list[shared_error.Error] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    
