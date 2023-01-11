import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleappsdrivelabelsv2betafieldappliedcapabilities as shared_googleappsdrivelabelsv2betafieldappliedcapabilities
from ..shared import googleappsdrivelabelsv2betauserinfo as shared_googleappsdrivelabelsv2betauserinfo
from ..shared import googleappsdrivelabelsv2betafielddateoptions as shared_googleappsdrivelabelsv2betafielddateoptions
from ..shared import googleappsdrivelabelsv2betafielddisplayhints as shared_googleappsdrivelabelsv2betafielddisplayhints
from ..shared import googleappsdrivelabelsv2betafieldintegeroptions as shared_googleappsdrivelabelsv2betafieldintegeroptions
from ..shared import googleappsdrivelabelsv2betalifecycle as shared_googleappsdrivelabelsv2betalifecycle
from ..shared import googleappsdrivelabelsv2betalockstatus as shared_googleappsdrivelabelsv2betalockstatus
from ..shared import googleappsdrivelabelsv2betafieldproperties as shared_googleappsdrivelabelsv2betafieldproperties
from ..shared import googleappsdrivelabelsv2betafieldschemacapabilities as shared_googleappsdrivelabelsv2betafieldschemacapabilities
from ..shared import googleappsdrivelabelsv2betafieldselectionoptions as shared_googleappsdrivelabelsv2betafieldselectionoptions
from ..shared import googleappsdrivelabelsv2betafieldtextoptions as shared_googleappsdrivelabelsv2betafieldtextoptions
from ..shared import googleappsdrivelabelsv2betafielduseroptions as shared_googleappsdrivelabelsv2betafielduseroptions
from ..shared import googleappsdrivelabelsv2betafielddateoptions as shared_googleappsdrivelabelsv2betafielddateoptions
from ..shared import googleappsdrivelabelsv2betalifecycle as shared_googleappsdrivelabelsv2betalifecycle
from ..shared import googleappsdrivelabelsv2betafieldselectionoptions as shared_googleappsdrivelabelsv2betafieldselectionoptions


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaField:
    r"""GoogleAppsDriveLabelsV2betaField
    Defines a field that has a display name, data type, and other configuration options. This field defines the kind of metadata that may be set on a Drive item.
    """
    
    applied_capabilities: Optional[shared_googleappsdrivelabelsv2betafieldappliedcapabilities.GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedCapabilities') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    creator: Optional[shared_googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    date_options: Optional[shared_googleappsdrivelabelsv2betafielddateoptions.GoogleAppsDriveLabelsV2betaFieldDateOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateOptions') }})
    disable_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableTime') }})
    disabler: Optional[shared_googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabler') }})
    display_hints: Optional[shared_googleappsdrivelabelsv2betafielddisplayhints.GoogleAppsDriveLabelsV2betaFieldDisplayHints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayHints') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    integer_options: Optional[shared_googleappsdrivelabelsv2betafieldintegeroptions.GoogleAppsDriveLabelsV2betaFieldIntegerOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integerOptions') }})
    lifecycle: Optional[shared_googleappsdrivelabelsv2betalifecycle.GoogleAppsDriveLabelsV2betaLifecycle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycle') }})
    lock_status: Optional[shared_googleappsdrivelabelsv2betalockstatus.GoogleAppsDriveLabelsV2betaLockStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lockStatus') }})
    properties: Optional[shared_googleappsdrivelabelsv2betafieldproperties.GoogleAppsDriveLabelsV2betaFieldProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    publisher: Optional[shared_googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher') }})
    query_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryKey') }})
    schema_capabilities: Optional[shared_googleappsdrivelabelsv2betafieldschemacapabilities.GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaCapabilities') }})
    selection_options: Optional[shared_googleappsdrivelabelsv2betafieldselectionoptions.GoogleAppsDriveLabelsV2betaFieldSelectionOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectionOptions') }})
    text_options: Optional[shared_googleappsdrivelabelsv2betafieldtextoptions.GoogleAppsDriveLabelsV2betaFieldTextOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textOptions') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    updater: Optional[shared_googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updater') }})
    user_options: Optional[shared_googleappsdrivelabelsv2betafielduseroptions.GoogleAppsDriveLabelsV2betaFieldUserOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userOptions') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaFieldInput:
    r"""GoogleAppsDriveLabelsV2betaFieldInput
    Defines a field that has a display name, data type, and other configuration options. This field defines the kind of metadata that may be set on a Drive item.
    """
    
    applied_capabilities: Optional[shared_googleappsdrivelabelsv2betafieldappliedcapabilities.GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedCapabilities') }})
    creator: Optional[shared_googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    date_options: Optional[shared_googleappsdrivelabelsv2betafielddateoptions.GoogleAppsDriveLabelsV2betaFieldDateOptionsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateOptions') }})
    disabler: Optional[shared_googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabler') }})
    display_hints: Optional[shared_googleappsdrivelabelsv2betafielddisplayhints.GoogleAppsDriveLabelsV2betaFieldDisplayHints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayHints') }})
    lifecycle: Optional[shared_googleappsdrivelabelsv2betalifecycle.GoogleAppsDriveLabelsV2betaLifecycleInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycle') }})
    properties: Optional[shared_googleappsdrivelabelsv2betafieldproperties.GoogleAppsDriveLabelsV2betaFieldProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    publisher: Optional[shared_googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher') }})
    schema_capabilities: Optional[shared_googleappsdrivelabelsv2betafieldschemacapabilities.GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaCapabilities') }})
    selection_options: Optional[shared_googleappsdrivelabelsv2betafieldselectionoptions.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectionOptions') }})
    updater: Optional[shared_googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updater') }})
    user_options: Optional[shared_googleappsdrivelabelsv2betafielduseroptions.GoogleAppsDriveLabelsV2betaFieldUserOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userOptions') }})
    
