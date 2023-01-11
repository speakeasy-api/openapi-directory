import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import updatedevicemetadatarequest as shared_updatedevicemetadatarequest
from ..shared import devicemetadata as shared_devicemetadata


@dataclasses.dataclass
class AndroiddeviceprovisioningPartnersDevicesMetadataPathParams:
    device_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    metadata_owner_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'metadataOwnerId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AndroiddeviceprovisioningPartnersDevicesMetadataQueryParams:
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
class AndroiddeviceprovisioningPartnersDevicesMetadataRequest:
    path_params: AndroiddeviceprovisioningPartnersDevicesMetadataPathParams = dataclasses.field()
    query_params: AndroiddeviceprovisioningPartnersDevicesMetadataQueryParams = dataclasses.field()
    request: Optional[shared_updatedevicemetadatarequest.UpdateDeviceMetadataRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AndroiddeviceprovisioningPartnersDevicesMetadataResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    device_metadata: Optional[shared_devicemetadata.DeviceMetadata] = dataclasses.field(default=None)
    
