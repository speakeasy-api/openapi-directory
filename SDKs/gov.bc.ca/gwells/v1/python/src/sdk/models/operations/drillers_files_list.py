import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class DrillersFilesListPathParams:
    person_guid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'person_guid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class DrillersFilesList200ApplicationJSONPrivate:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class DrillersFilesList200ApplicationJSONPublic:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class DrillersFilesList200ApplicationJSON:
    private: Optional[list[DrillersFilesList200ApplicationJSONPrivate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private') }})
    public: Optional[list[DrillersFilesList200ApplicationJSONPublic]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    

@dataclasses.dataclass
class DrillersFilesListRequest:
    path_params: DrillersFilesListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DrillersFilesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    drillers_files_list_200_application_json_object: Optional[DrillersFilesList200ApplicationJSON] = dataclasses.field(default=None)
    
