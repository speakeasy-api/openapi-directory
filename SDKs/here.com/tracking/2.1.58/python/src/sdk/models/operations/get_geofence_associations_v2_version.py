import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetGeofenceAssociationsV2VersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_geofence_associations_v2_version_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
