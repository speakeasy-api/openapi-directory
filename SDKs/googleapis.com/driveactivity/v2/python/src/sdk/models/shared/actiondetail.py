import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import appliedlabelchange as shared_appliedlabelchange
from ..shared import comment as shared_comment
from ..shared import create as shared_create
from ..shared import delete as shared_delete
from ..shared import dataleakpreventionchange as shared_dataleakpreventionchange
from ..shared import move as shared_move
from ..shared import permissionchange as shared_permissionchange
from ..shared import applicationreference as shared_applicationreference
from ..shared import rename as shared_rename
from ..shared import restore as shared_restore
from ..shared import settingschange as shared_settingschange


@dataclass_json
@dataclasses.dataclass
class ActionDetail:
    r"""ActionDetail
    Data describing the type and additional information of an action.
    """
    
    applied_label_change: Optional[shared_appliedlabelchange.AppliedLabelChange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedLabelChange') }})
    comment: Optional[shared_comment.Comment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    create: Optional[shared_create.Create] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('create') }})
    delete: Optional[shared_delete.Delete] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    dlp_change: Optional[shared_dataleakpreventionchange.DataLeakPreventionChange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dlpChange') }})
    edit: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('edit') }})
    move: Optional[shared_move.Move] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('move') }})
    permission_change: Optional[shared_permissionchange.PermissionChange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissionChange') }})
    reference: Optional[shared_applicationreference.ApplicationReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference') }})
    rename: Optional[shared_rename.Rename] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rename') }})
    restore: Optional[shared_restore.Restore] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restore') }})
    settings_change: Optional[shared_settingschange.SettingsChange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settingsChange') }})
    
