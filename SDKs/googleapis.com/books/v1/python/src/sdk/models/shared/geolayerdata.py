import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GeolayerdataCommon:
    lang: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lang') }})
    preview_image_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previewImageUrl') }})
    snippet: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippet') }})
    snippet_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippetUrl') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclasses.dataclass
class GeolayerdataGeoViewportHi:
    latitude: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    

@dataclass_json
@dataclasses.dataclass
class GeolayerdataGeoViewportLo:
    latitude: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    

@dataclass_json
@dataclasses.dataclass
class GeolayerdataGeoViewport:
    r"""GeolayerdataGeoViewport
    The viewport for showing this location. This is a latitude, longitude rectangle.
    """
    
    hi: Optional[GeolayerdataGeoViewportHi] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hi') }})
    lo: Optional[GeolayerdataGeoViewportLo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lo') }})
    

@dataclass_json
@dataclasses.dataclass
class GeolayerdataGeo:
    boundary: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundary') }})
    cache_policy: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cachePolicy') }})
    country_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode') }})
    latitude: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    map_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mapType') }})
    viewport: Optional[GeolayerdataGeoViewport] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewport') }})
    zoom: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zoom') }})
    

@dataclass_json
@dataclasses.dataclass
class Geolayerdata:
    common: Optional[GeolayerdataCommon] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('common') }})
    geo: Optional[GeolayerdataGeo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geo') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
