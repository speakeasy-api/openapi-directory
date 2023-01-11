import dataclasses
from typing import Optional
from enum import Enum
from ..shared import offeringid_enum1 as shared_offeringid_enum1
from ..shared import error as shared_error
from ..shared import offeringuserresponse as shared_offeringuserresponse


@dataclasses.dataclass
class GetOfferingsOfferingIDUsersPathParams:
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOfferingsOfferingIDUsersQueryParams:
    facilitators: Optional[shared_offeringid_enum1.OfferingIDEnum1] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'facilitators', 'style': 'form', 'explode': True }})
    learners: Optional[shared_offeringid_enum1.OfferingIDEnum1] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'learners', 'style': 'form', 'explode': True }})
    markers: Optional[shared_offeringid_enum1.OfferingIDEnum1] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'markers', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetOfferingsOfferingIDUsersRequest:
    path_params: GetOfferingsOfferingIDUsersPathParams = dataclasses.field()
    query_params: GetOfferingsOfferingIDUsersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOfferingsOfferingIDUsersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    offering_user_responses: Optional[list[shared_offeringuserresponse.OfferingUserResponse]] = dataclasses.field(default=None)
    
