import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import asset as shared_asset

class AssetAssociationRoleEnum(str, Enum):
    ASSET_ROLE_UNSPECIFIED = "ASSET_ROLE_UNSPECIFIED"
    ASSET_ROLE_MAIN = "ASSET_ROLE_MAIN"
    ASSET_ROLE_BACKUP = "ASSET_ROLE_BACKUP"
    ASSET_ROLE_POLITE_LOAD = "ASSET_ROLE_POLITE_LOAD"
    ASSET_ROLE_HEADLINE = "ASSET_ROLE_HEADLINE"
    ASSET_ROLE_LONG_HEADLINE = "ASSET_ROLE_LONG_HEADLINE"
    ASSET_ROLE_BODY = "ASSET_ROLE_BODY"
    ASSET_ROLE_LONG_BODY = "ASSET_ROLE_LONG_BODY"
    ASSET_ROLE_CAPTION_URL = "ASSET_ROLE_CAPTION_URL"
    ASSET_ROLE_CALL_TO_ACTION = "ASSET_ROLE_CALL_TO_ACTION"
    ASSET_ROLE_ADVERTISER_NAME = "ASSET_ROLE_ADVERTISER_NAME"
    ASSET_ROLE_PRICE = "ASSET_ROLE_PRICE"
    ASSET_ROLE_ANDROID_APP_ID = "ASSET_ROLE_ANDROID_APP_ID"
    ASSET_ROLE_IOS_APP_ID = "ASSET_ROLE_IOS_APP_ID"
    ASSET_ROLE_RATING = "ASSET_ROLE_RATING"
    ASSET_ROLE_ICON = "ASSET_ROLE_ICON"
    ASSET_ROLE_COVER_IMAGE = "ASSET_ROLE_COVER_IMAGE"


@dataclass_json
@dataclasses.dataclass
class AssetAssociation:
    r"""AssetAssociation
    Asset association for the creative.
    """
    
    asset: Optional[shared_asset.Asset] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset') }})
    role: Optional[AssetAssociationRoleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    
