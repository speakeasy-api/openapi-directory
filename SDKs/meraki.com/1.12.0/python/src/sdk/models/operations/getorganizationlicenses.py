import dataclasses
from typing import Any,Optional
from enum import Enum


@dataclasses.dataclass
class GetOrganizationLicensesPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
class GetOrganizationLicensesStateEnum(str, Enum):
    ACTIVE = "active"
    EXPIRED = "expired"
    EXPIRING = "expiring"
    UNUSED = "unused"
    UNUSED_ACTIVE = "unusedActive"
    RECENTLY_QUEUED = "recentlyQueued"


@dataclasses.dataclass
class GetOrganizationLicensesQueryParams:
    device_serial: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'deviceSerial', 'style': 'form', 'explode': True }})
    ending_before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    network_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'networkId', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    state: Optional[GetOrganizationLicensesStateEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetOrganizationLicensesRequest:
    path_params: GetOrganizationLicensesPathParams = dataclasses.field()
    query_params: GetOrganizationLicensesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationLicensesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_licenses_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
