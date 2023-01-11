import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationDevicesPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationDevicesQueryParams:
    configuration_updated_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'configurationUpdatedAfter', 'style': 'form', 'explode': True }})
    ending_before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetOrganizationDevicesRequest:
    path_params: GetOrganizationDevicesPathParams = dataclasses.field()
    query_params: GetOrganizationDevicesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationDevicesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_devices_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
