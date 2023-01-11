import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import claimdevicerequest as shared_claimdevicerequest
from ..shared import claimdeviceresponse as shared_claimdeviceresponse


@dataclasses.dataclass
class AndroiddeviceprovisioningPartnersDevicesClaimPathParams:
    partner_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'partnerId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AndroiddeviceprovisioningPartnersDevicesClaimQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AndroiddeviceprovisioningPartnersDevicesClaimRequest:
    path_params: AndroiddeviceprovisioningPartnersDevicesClaimPathParams = dataclasses.field()
    query_params: AndroiddeviceprovisioningPartnersDevicesClaimQueryParams = dataclasses.field()
    request: Optional[shared_claimdevicerequest.ClaimDeviceRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AndroiddeviceprovisioningPartnersDevicesClaimResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    claim_device_response: Optional[shared_claimdeviceresponse.ClaimDeviceResponse] = dataclasses.field(default=None)
    
