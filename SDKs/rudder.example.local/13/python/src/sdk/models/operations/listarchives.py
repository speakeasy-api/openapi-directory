import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import archive_kind_enum as shared_archive_kind_enum


@dataclasses.dataclass
class ListArchivesPathParams:
    archive_kind: shared_archive_kind_enum.ArchiveKindEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'archiveKind', 'style': 'simple', 'explode': False }})
    
class ListArchives200ApplicationJSONActionEnum(str, Enum):
    ARCHIVE_FULL = "archiveFull"
    ARCHIVE_GROUPS = "archiveGroups"
    ARCHIVE_RULES = "archiveRules"
    ARCHIVE_DIRECTIVES = "archiveDirectives"
    ARCHIVE_PARAMETERS = "archiveParameters"


@dataclass_json
@dataclasses.dataclass
class ListArchives200ApplicationJSONDataFull:
    commiter: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commiter') }})
    git_commit: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitCommit') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class ListArchives200ApplicationJSONData:
    full: list[ListArchives200ApplicationJSONDataFull] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('full') }})
    
class ListArchives200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class ListArchives200ApplicationJSON:
    action: ListArchives200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ListArchives200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ListArchives200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class ListArchivesRequest:
    path_params: ListArchivesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ListArchivesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_archives_200_application_json_object: Optional[ListArchives200ApplicationJSON] = dataclasses.field(default=None)
    
