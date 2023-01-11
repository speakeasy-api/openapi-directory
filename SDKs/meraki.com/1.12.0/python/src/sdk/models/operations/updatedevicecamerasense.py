import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateDeviceCameraSensePathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateDeviceCameraSenseRequestBodyAudioDetection:
    r"""UpdateDeviceCameraSenseRequestBodyAudioDetection
    The details of the audio detection config.
    """
    
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateDeviceCameraSenseRequestBody:
    audio_detection: Optional[UpdateDeviceCameraSenseRequestBodyAudioDetection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioDetection') }})
    detection_model_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectionModelId') }})
    mqtt_broker_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mqttBrokerId') }})
    sense_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('senseEnabled') }})
    

@dataclasses.dataclass
class UpdateDeviceCameraSenseRequest:
    path_params: UpdateDeviceCameraSensePathParams = dataclasses.field()
    request: Optional[UpdateDeviceCameraSenseRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateDeviceCameraSenseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_device_camera_sense_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
