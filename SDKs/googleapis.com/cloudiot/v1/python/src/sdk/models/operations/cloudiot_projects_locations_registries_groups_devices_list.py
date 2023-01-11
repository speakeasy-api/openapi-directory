import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import listdevicesresponse as shared_listdevicesresponse


@dataclasses.dataclass
class CloudiotProjectsLocationsRegistriesGroupsDevicesListPathParams:
    parent: str = dataclasses.field(metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    
class CloudiotProjectsLocationsRegistriesGroupsDevicesListGatewayListOptionsGatewayTypeEnum(str, Enum):
    GATEWAY_TYPE_UNSPECIFIED = "GATEWAY_TYPE_UNSPECIFIED"
    GATEWAY = "GATEWAY"
    NON_GATEWAY = "NON_GATEWAY"


@dataclasses.dataclass
class CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    device_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'deviceIds', 'style': 'form', 'explode': True }})
    device_num_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'deviceNumIds', 'style': 'form', 'explode': True }})
    field_mask: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fieldMask', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    gateway_list_options_associations_device_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'gatewayListOptions.associationsDeviceId', 'style': 'form', 'explode': True }})
    gateway_list_options_associations_gateway_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'gatewayListOptions.associationsGatewayId', 'style': 'form', 'explode': True }})
    gateway_list_options_gateway_type: Optional[CloudiotProjectsLocationsRegistriesGroupsDevicesListGatewayListOptionsGatewayTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'gatewayListOptions.gatewayType', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurity:
    option1: Optional[CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class CloudiotProjectsLocationsRegistriesGroupsDevicesListRequest:
    path_params: CloudiotProjectsLocationsRegistriesGroupsDevicesListPathParams = dataclasses.field()
    query_params: CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams = dataclasses.field()
    security: CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CloudiotProjectsLocationsRegistriesGroupsDevicesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_devices_response: Optional[shared_listdevicesresponse.ListDevicesResponse] = dataclasses.field(default=None)
    
