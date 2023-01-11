import dataclasses
from typing import Optional


@dataclasses.dataclass
class SessionControllerCreateLandlordLoginPathParams:
    short_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SessionControllerCreateLandlordLoginQueryParams:
    contact_details: str = dataclasses.field(metadata={'query_param': { 'field_name': 'contactDetails', 'style': 'form', 'explode': True }})
    email: str = dataclasses.field(metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    forename: str = dataclasses.field(metadata={'query_param': { 'field_name': 'forename', 'style': 'form', 'explode': True }})
    property_address: str = dataclasses.field(metadata={'query_param': { 'field_name': 'propertyAddress', 'style': 'form', 'explode': True }})
    surname: str = dataclasses.field(metadata={'query_param': { 'field_name': 'surname', 'style': 'form', 'explode': True }})
    title: str = dataclasses.field(metadata={'query_param': { 'field_name': 'title', 'style': 'form', 'explode': True }})
    branch_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'branchID', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SessionControllerCreateLandlordLoginRequest:
    path_params: SessionControllerCreateLandlordLoginPathParams = dataclasses.field()
    query_params: SessionControllerCreateLandlordLoginQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SessionControllerCreateLandlordLoginResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
