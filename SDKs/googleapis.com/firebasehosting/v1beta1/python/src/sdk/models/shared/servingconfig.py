import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import header as shared_header
from ..shared import i18nconfig as shared_i18nconfig
from ..shared import redirect as shared_redirect
from ..shared import rewrite as shared_rewrite

class ServingConfigAppAssociationEnum(str, Enum):
    AUTO = "AUTO"
    NONE = "NONE"

class ServingConfigTrailingSlashBehaviorEnum(str, Enum):
    TRAILING_SLASH_BEHAVIOR_UNSPECIFIED = "TRAILING_SLASH_BEHAVIOR_UNSPECIFIED"
    ADD = "ADD"
    REMOVE = "REMOVE"


@dataclass_json
@dataclasses.dataclass
class ServingConfig:
    r"""ServingConfig
    The configuration for how incoming requests to a site should be routed and processed before serving content. The URL request paths are matched against the specified URL patterns in the configuration, then Hosting applies the applicable configuration according to a specific [priority order](https://firebase.google.com/docs/hosting/full-config#hosting_priority_order).
    """
    
    app_association: Optional[ServingConfigAppAssociationEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appAssociation') }})
    clean_urls: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cleanUrls') }})
    headers: Optional[list[shared_header.Header]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    i18n: Optional[shared_i18nconfig.I18nConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('i18n') }})
    redirects: Optional[list[shared_redirect.Redirect]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirects') }})
    rewrites: Optional[list[shared_rewrite.Rewrite]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rewrites') }})
    trailing_slash_behavior: Optional[ServingConfigTrailingSlashBehaviorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trailingSlashBehavior') }})
    
