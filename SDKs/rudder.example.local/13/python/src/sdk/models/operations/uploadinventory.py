import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UploadInventoryRequestBodyFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclasses.dataclass
class UploadInventoryRequestBodySignature:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    signature: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'signature' }})
    

@dataclasses.dataclass
class UploadInventoryRequestBody:
    file: Optional[UploadInventoryRequestBodyFile] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    signature: Optional[UploadInventoryRequestBodySignature] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    
class UploadInventory200ApplicationJSONActionEnum(str, Enum):
    UPLOAD_INVENTORY = "uploadInventory"

class UploadInventory200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class UploadInventory200ApplicationJSON:
    action: UploadInventory200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: UploadInventory200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class UploadInventoryRequest:
    request: Optional[UploadInventoryRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UploadInventoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    upload_inventory_200_application_json_object: Optional[UploadInventory200ApplicationJSON] = dataclasses.field(default=None)
    
