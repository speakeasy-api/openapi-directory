import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GenerateDeviceCameraSnapshotPathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GenerateDeviceCameraSnapshotRequestBody:
    fullframe: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullframe') }})
    timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclasses.dataclass
class GenerateDeviceCameraSnapshotRequest:
    path_params: GenerateDeviceCameraSnapshotPathParams = dataclasses.field()
    request: Optional[GenerateDeviceCameraSnapshotRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GenerateDeviceCameraSnapshotResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    generate_device_camera_snapshot_202_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
