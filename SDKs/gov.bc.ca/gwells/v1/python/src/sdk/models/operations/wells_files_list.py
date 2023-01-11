import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class WellsFilesListPathParams:
    tag: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tag', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class WellsFilesList200ApplicationJSONPrivate:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class WellsFilesList200ApplicationJSONPublic:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class WellsFilesList200ApplicationJSON:
    private: Optional[list[WellsFilesList200ApplicationJSONPrivate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private') }})
    public: Optional[list[WellsFilesList200ApplicationJSONPublic]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    

@dataclasses.dataclass
class WellsFilesListRequest:
    path_params: WellsFilesListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class WellsFilesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    wells_files_list_200_application_json_object: Optional[WellsFilesList200ApplicationJSON] = dataclasses.field(default=None)
    
