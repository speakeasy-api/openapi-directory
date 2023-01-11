import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import user as shared_user


@dataclass_json
@dataclasses.dataclass
class AboutAdditionalRoleInfoRoleSets:
    additional_roles: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalRoles') }})
    primary_role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryRole') }})
    

@dataclass_json
@dataclasses.dataclass
class AboutAdditionalRoleInfo:
    role_sets: Optional[list[AboutAdditionalRoleInfoRoleSets]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleSets') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AboutDriveThemes:
    background_image_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundImageLink') }})
    color_rgb: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colorRgb') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class AboutExportFormats:
    source: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    targets: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    

@dataclass_json
@dataclasses.dataclass
class AboutFeatures:
    feature_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('featureName') }})
    feature_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('featureRate') }})
    

@dataclass_json
@dataclasses.dataclass
class AboutImportFormats:
    source: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    targets: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    

@dataclass_json
@dataclasses.dataclass
class AboutMaxUploadSizes:
    size: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AboutQuotaBytesByService:
    bytes_used: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bytesUsed') }})
    service_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceName') }})
    

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
    An item with user information and settings.
    """
    
    additional_role_info: Optional[list[AboutAdditionalRoleInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalRoleInfo') }})
    can_create_drives: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canCreateDrives') }})
    can_create_team_drives: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canCreateTeamDrives') }})
    domain_sharing_policy: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainSharingPolicy') }})
    drive_themes: Optional[list[AboutDriveThemes]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driveThemes') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    export_formats: Optional[list[AboutExportFormats]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportFormats') }})
    features: Optional[list[AboutFeatures]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    folder_color_palette: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('folderColorPalette') }})
    import_formats: Optional[list[AboutImportFormats]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importFormats') }})
    is_current_app_installed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isCurrentAppInstalled') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    largest_change_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('largestChangeId') }})
    max_upload_sizes: Optional[list[AboutMaxUploadSizes]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxUploadSizes') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    permission_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissionId') }})
    quota_bytes_by_service: Optional[list[AboutQuotaBytesByService]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quotaBytesByService') }})
    quota_bytes_total: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quotaBytesTotal') }})
    quota_bytes_used: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quotaBytesUsed') }})
    quota_bytes_used_aggregate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quotaBytesUsedAggregate') }})
    quota_bytes_used_in_trash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quotaBytesUsedInTrash') }})
    quota_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quotaType') }})
    remaining_change_ids: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remainingChangeIds') }})
    root_folder_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rootFolderId') }})
    self_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    team_drive_themes: Optional[list[AboutTeamDriveThemes]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teamDriveThemes') }})
    user: Optional[shared_user.User] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
