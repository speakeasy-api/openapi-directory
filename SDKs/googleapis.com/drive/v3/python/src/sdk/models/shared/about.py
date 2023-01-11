import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import user as shared_user


@dataclass_json
@dataclasses.dataclass
class AboutDriveThemes:
    background_image_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundImageLink') }})
    color_rgb: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colorRgb') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class AboutStorageQuota:
    r"""AboutStorageQuota
    The user's storage quota limits and usage. All fields are measured in bytes.
    """
    
    limit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    usage: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage') }})
    usage_in_drive: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageInDrive') }})
    usage_in_drive_trash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageInDriveTrash') }})
    

@dataclass_json
@dataclasses.dataclass
class AboutTeamDriveThemes:
    background_image_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundImageLink') }})
    color_rgb: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colorRgb') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class About:
    r"""About
    Information about the user, the user's Drive, and system capabilities.
    """
    
    app_installed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appInstalled') }})
    can_create_drives: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canCreateDrives') }})
    can_create_team_drives: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canCreateTeamDrives') }})
    drive_themes: Optional[list[AboutDriveThemes]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driveThemes') }})
    export_formats: Optional[dict[str, list[str]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportFormats') }})
    folder_color_palette: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('folderColorPalette') }})
    import_formats: Optional[dict[str, list[str]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importFormats') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    max_import_sizes: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxImportSizes') }})
    max_upload_size: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxUploadSize') }})
    storage_quota: Optional[AboutStorageQuota] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageQuota') }})
    team_drive_themes: Optional[list[AboutTeamDriveThemes]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teamDriveThemes') }})
    user: Optional[shared_user.User] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
