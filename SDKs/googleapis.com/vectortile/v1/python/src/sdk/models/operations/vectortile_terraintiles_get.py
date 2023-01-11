import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import terraintile as shared_terraintile


@dataclasses.dataclass
class VectortileTerraintilesGetPathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    
class VectortileTerraintilesGetClientInfoPlatformEnum(str, Enum):
    PLATFORM_UNSPECIFIED = "PLATFORM_UNSPECIFIED"
    EDITOR = "EDITOR"
    MAC_OS = "MAC_OS"
    WINDOWS = "WINDOWS"
    LINUX = "LINUX"
    ANDROID = "ANDROID"
    IOS = "IOS"
    WEB_GL = "WEB_GL"

class VectortileTerraintilesGetTerrainFormatsEnum(str, Enum):
    TERRAIN_FORMAT_UNKNOWN = "TERRAIN_FORMAT_UNKNOWN"
    FIRST_DERIVATIVE = "FIRST_DERIVATIVE"
    SECOND_DERIVATIVE = "SECOND_DERIVATIVE"


@dataclasses.dataclass
class VectortileTerraintilesGetQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    altitude_precision_centimeters: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'altitudePrecisionCentimeters', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    client_info_api_client: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'clientInfo.apiClient', 'style': 'form', 'explode': True }})
    client_info_application_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'clientInfo.applicationId', 'style': 'form', 'explode': True }})
    client_info_application_version: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'clientInfo.applicationVersion', 'style': 'form', 'explode': True }})
    client_info_device_model: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'clientInfo.deviceModel', 'style': 'form', 'explode': True }})
    client_info_operating_system: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'clientInfo.operatingSystem', 'style': 'form', 'explode': True }})
    client_info_platform: Optional[VectortileTerraintilesGetClientInfoPlatformEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'clientInfo.platform', 'style': 'form', 'explode': True }})
    client_info_user_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'clientInfo.userId', 'style': 'form', 'explode': True }})
    enable_modeled_volumes: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'enableModeledVolumes', 'style': 'form', 'explode': True }})
    enable_political_features: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'enablePoliticalFeatures', 'style': 'form', 'explode': True }})
    enable_private_roads: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'enablePrivateRoads', 'style': 'form', 'explode': True }})
    enable_unclipped_buildings: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'enableUnclippedBuildings', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'languageCode', 'style': 'form', 'explode': True }})
    max_elevation_resolution_cells: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxElevationResolutionCells', 'style': 'form', 'explode': True }})
    min_elevation_resolution_cells: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minElevationResolutionCells', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    region_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'regionCode', 'style': 'form', 'explode': True }})
    terrain_formats: Optional[list[VectortileTerraintilesGetTerrainFormatsEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'terrainFormats', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class VectortileTerraintilesGetRequest:
    path_params: VectortileTerraintilesGetPathParams = dataclasses.field()
    query_params: VectortileTerraintilesGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class VectortileTerraintilesGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    terrain_tile: Optional[shared_terraintile.TerrainTile] = dataclasses.field(default=None)
    
