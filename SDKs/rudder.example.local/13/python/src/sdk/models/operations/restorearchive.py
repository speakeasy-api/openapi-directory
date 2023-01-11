import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import archive_kind_enum as shared_archive_kind_enum
from ..shared import archive_kind_enum1 as shared_archive_kind_enum1


@dataclasses.dataclass
class RestoreArchivePathParams:
    archive_kind: shared_archive_kind_enum.ArchiveKindEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'archiveKind', 'style': 'simple', 'explode': False }})
    archive_restore_kind: shared_archive_kind_enum1.ArchiveKindEnum1 = dataclasses.field(metadata={'path_param': { 'field_name': 'archiveRestoreKind', 'style': 'simple', 'explode': False }})
    
class RestoreArchive200ApplicationJSONActionEnum(str, Enum):
    RESTORE_FULL_LATEST_ARCHIVE = "restoreFullLatestArchive"
    RESTORE_GROUP_LATEST_ARCHIVE = "restoreGroupLatestArchive"
    RESTORE_RULES_LATEST_ARCHIVE = "restoreRulesLatestArchive"
    RESTORE_DIRECTIVES_LATEST_ARCHIVE = "restoreDirectivesLatestArchive"
    RESTORE_PARAMETERS_LATEST_ARCHIVE = "restoreParametersLatestArchive"
    RESTORE_FULL_LATEST_COMMIT = "restoreFullLatestCommit"
    RESTORE_GROUP_LATEST_COMMIT = "restoreGroupLatestCommit"
    RESTORE_RULES_LATEST_COMMIT = "restoreRulesLatestCommit"
    RESTORE_DIRECTIVES_LATEST_COMMIT = "restoreDirectivesLatestCommit"
    RESTORE_PARAMETERS_LATEST_COMMIT = "restoreParametersLatestCommit"
    ARCHIVE_FULL_DATE_RESTORE = "archiveFullDateRestore"
    ARCHIVE_GROUP_DATE_RESTORE = "archiveGroupDateRestore"
    ARCHIVE_RULES_DATE_RESTORE = "archiveRulesDateRestore"
    ARCHIVE_DIRECTIVES_DATE_RESTORE = "archiveDirectivesDateRestore"
    ARCHIVE_PARAMETERS_DATE_RESTORE = "archiveParametersDateRestore"


@dataclass_json
@dataclasses.dataclass
class RestoreArchive200ApplicationJSONData:
    directive: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directive') }})
    full: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('full') }})
    groups: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    parameters: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    rules: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
class RestoreArchive200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class RestoreArchive200ApplicationJSON:
    action: RestoreArchive200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: RestoreArchive200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: RestoreArchive200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class RestoreArchiveRequest:
    path_params: RestoreArchivePathParams = dataclasses.field()
    

@dataclasses.dataclass
class RestoreArchiveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    restore_archive_200_application_json_object: Optional[RestoreArchive200ApplicationJSON] = dataclasses.field(default=None)
    
