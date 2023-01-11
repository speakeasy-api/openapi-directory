import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import link as shared_link
from ..shared import optional_link as shared_optional_link
from ..shared import shipment_response_error as shared_shipment_response_error


@dataclass_json
@dataclasses.dataclass
class ListShipmentErrorsResponseBodyPaginationLink:
    r"""ListShipmentErrorsResponseBodyPaginationLink
    Helpful links to other pages of results
    """
    
    first: shared_link.Link = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('first') }})
    last: shared_link.Link = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last') }})
    next: shared_optional_link.OptionalLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    prev: shared_optional_link.OptionalLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    

@dataclass_json
@dataclasses.dataclass
class ListShipmentErrorsResponseBody:
    r"""ListShipmentErrorsResponseBody
    A shipment errors response body
    """
    
    errors: list[shared_shipment_response_error.ShipmentResponseError] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    links: ListShipmentErrorsResponseBodyPaginationLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    
