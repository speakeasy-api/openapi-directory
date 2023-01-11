import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bookingstatus_item as shared_bookingstatus_item
from ..shared import bookingstatus_itinerary as shared_bookingstatus_itinerary


@dataclasses.dataclass
class BookingStatusHeaders:
    accept_language: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class BookingStatusRequestBody:
    r"""BookingStatusRequestBody
    **note**: all items are optional, but at least one needs to be included
    """
    
    booking_date_from: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookingDateFrom') }})
    booking_date_to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookingDateTo') }})
    distributor_item_refs: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distributorItemRefs') }})
    distributor_refs: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distributorRefs') }})
    item_ids: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemIds') }})
    lead_first_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leadFirstName') }})
    lead_surname: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leadSurname') }})
    test: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('test') }})
    

@dataclass_json
@dataclasses.dataclass
class BookingStatus200ApplicationJSONDataItemSummaries:
    booking_status: Optional[shared_bookingstatus_item.BookingStatusItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookingStatus') }})
    distributor_item_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distributorItemRef') }})
    item_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemId') }})
    itinerary_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itineraryId') }})
    sort_order: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    travel_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('travelDate') }})
    

@dataclass_json
@dataclasses.dataclass
class BookingStatus200ApplicationJSONData:
    r"""BookingStatus200ApplicationJSONData
    **object** containing booking status and details
    """
    
    booking_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookingDate') }})
    booking_status: Optional[shared_bookingstatus_itinerary.BookingStatusItinerary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookingStatus') }})
    distributor_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distributorRef') }})
    item_summaries: Optional[list[BookingStatus200ApplicationJSONDataItemSummaries]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemSummaries') }})
    itinerary_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itineraryId') }})
    sort_order: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    

@dataclass_json
@dataclasses.dataclass
class BookingStatus200ApplicationJSON:
    data: Optional[BookingStatus200ApplicationJSONData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
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
class BookingStatusRequest:
    headers: BookingStatusHeaders = dataclasses.field()
    request: Optional[BookingStatusRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BookingStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    booking_status_200_application_json_object: Optional[BookingStatus200ApplicationJSON] = dataclasses.field(default=None)
    
