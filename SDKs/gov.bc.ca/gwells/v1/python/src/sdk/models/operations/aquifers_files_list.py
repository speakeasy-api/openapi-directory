import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class AquifersFilesListPathParams:
    aquifer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'aquifer_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AquifersFilesList200ApplicationJSONPrivate:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class AquifersFilesList200ApplicationJSONPublic:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class AquifersFilesList200ApplicationJSON:
    private: Optional[list[AquifersFilesList200ApplicationJSONPrivate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private') }})
    public: Optional[list[AquifersFilesList200ApplicationJSONPublic]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    

@dataclasses.dataclass
class AquifersFilesListRequest:
    path_params: AquifersFilesListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AquifersFilesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    aquifers_files_list_200_application_json_object: Optional[AquifersFilesList200ApplicationJSON] = dataclasses.field(default=None)
    
