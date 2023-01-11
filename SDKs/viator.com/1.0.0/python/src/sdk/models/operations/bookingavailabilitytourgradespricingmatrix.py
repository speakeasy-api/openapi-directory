import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class BookingAvailabilityTourgradesPricingmatrixHeaders:
    accept_language: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class BookingAvailabilityTourgradesPricingmatrixRequestBody:
    currency_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    month: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('month') }})
    product_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productCode') }})
    year: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    

@dataclass_json
@dataclasses.dataclass
class BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGradesPricingMatrixAgeBandPricesPrices:
    currency_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    merchant_net_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantNetPrice') }})
    merchant_net_price_formatted: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantNetPriceFormatted') }})
    min_no_of_travellers_required_for_price: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minNoOfTravellersRequiredForPrice') }})
    price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    price_formatted: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceFormatted') }})
    sort_order: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    

@dataclass_json
@dataclasses.dataclass
class BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGradesPricingMatrixAgeBandPrices:
    band_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandId') }})
    maximum_count_required: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumCountRequired') }})
    minimum_count_required: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumCountRequired') }})
    prices: Optional[list[BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGradesPricingMatrixAgeBandPricesPrices]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    sort_order: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    

@dataclass_json
@dataclasses.dataclass
class BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGradesPricingMatrix:
    age_band_prices: Optional[list[BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGradesPricingMatrixAgeBandPrices]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ageBandPrices') }})
    booking_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookingDate') }})
    pricing_unit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricingUnit') }})
    sort_order: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    

@dataclass_json
@dataclasses.dataclass
class BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGrades:
    grade_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gradeCode') }})
    grade_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gradeTitle') }})
    pricing_matrix: Optional[list[BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGradesPricingMatrix]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricingMatrix') }})
    sort_order: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    

@dataclass_json
@dataclasses.dataclass
class BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDates:
    booking_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookingDate') }})
    call_for_last_min_availability: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callForLastMinAvailability') }})
    sort_order: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    tour_grades: Optional[list[BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGrades]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tourGrades') }})
    

@dataclass_json
@dataclasses.dataclass
class BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONData:
    booking_month: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookingMonth') }})
    dates: Optional[list[BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDates]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dates') }})
    pricing_unit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricingUnit') }})
    

@dataclass_json
@dataclasses.dataclass
class BookingAvailabilityTourgradesPricingmatrix200ApplicationJSON:
    data: Optional[BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    date_stamp: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateStamp') }})
    error_codes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCodes') }})
    error_message: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    error_message_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessageText') }})
    error_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorName') }})
    error_reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorReference') }})
    error_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorType') }})
    extra_info: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extraInfo') }})
    extra_object: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extraObject') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    total_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCount') }})
    vmid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmid') }})
    

@dataclasses.dataclass
class BookingAvailabilityTourgradesPricingmatrixRequest:
    headers: BookingAvailabilityTourgradesPricingmatrixHeaders = dataclasses.field()
    request: Optional[BookingAvailabilityTourgradesPricingmatrixRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BookingAvailabilityTourgradesPricingmatrixResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    booking_availability_tourgrades_pricingmatrix_200_application_json_object: Optional[BookingAvailabilityTourgradesPricingmatrix200ApplicationJSON] = dataclasses.field(default=None)
    
