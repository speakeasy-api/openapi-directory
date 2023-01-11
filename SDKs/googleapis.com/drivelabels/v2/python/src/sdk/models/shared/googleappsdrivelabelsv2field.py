import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleappsdrivelabelsv2fieldappliedcapabilities as shared_googleappsdrivelabelsv2fieldappliedcapabilities
from ..shared import googleappsdrivelabelsv2userinfo as shared_googleappsdrivelabelsv2userinfo
from ..shared import googleappsdrivelabelsv2fielddateoptions as shared_googleappsdrivelabelsv2fielddateoptions
from ..shared import googleappsdrivelabelsv2fielddisplayhints as shared_googleappsdrivelabelsv2fielddisplayhints
from ..shared import googleappsdrivelabelsv2fieldintegeroptions as shared_googleappsdrivelabelsv2fieldintegeroptions
from ..shared import googleappsdrivelabelsv2lifecycle as shared_googleappsdrivelabelsv2lifecycle
from ..shared import googleappsdrivelabelsv2lockstatus as shared_googleappsdrivelabelsv2lockstatus
from ..shared import googleappsdrivelabelsv2fieldproperties as shared_googleappsdrivelabelsv2fieldproperties
from ..shared import googleappsdrivelabelsv2fieldschemacapabilities as shared_googleappsdrivelabelsv2fieldschemacapabilities
from ..shared import googleappsdrivelabelsv2fieldselectionoptions as shared_googleappsdrivelabelsv2fieldselectionoptions
from ..shared import googleappsdrivelabelsv2fieldtextoptions as shared_googleappsdrivelabelsv2fieldtextoptions
from ..shared import googleappsdrivelabelsv2fielduseroptions as shared_googleappsdrivelabelsv2fielduseroptions


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2Field:
    r"""GoogleAppsDriveLabelsV2Field
    Defines a field that has a display name, data type, and other configuration options. This field defines the kind of metadata that may be set on a Drive item.
    """
    
    applied_capabilities: Optional[shared_googleappsdrivelabelsv2fieldappliedcapabilities.GoogleAppsDriveLabelsV2FieldAppliedCapabilities] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedCapabilities') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    creator: Optional[shared_googleappsdrivelabelsv2userinfo.GoogleAppsDriveLabelsV2UserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    date_options: Optional[shared_googleappsdrivelabelsv2fielddateoptions.GoogleAppsDriveLabelsV2FieldDateOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateOptions') }})
    disable_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableTime') }})
    disabler: Optional[shared_googleappsdrivelabelsv2userinfo.GoogleAppsDriveLabelsV2UserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabler') }})
    display_hints: Optional[shared_googleappsdrivelabelsv2fielddisplayhints.GoogleAppsDriveLabelsV2FieldDisplayHints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayHints') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    integer_options: Optional[shared_googleappsdrivelabelsv2fieldintegeroptions.GoogleAppsDriveLabelsV2FieldIntegerOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integerOptions') }})
    lifecycle: Optional[shared_googleappsdrivelabelsv2lifecycle.GoogleAppsDriveLabelsV2Lifecycle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycle') }})
    lock_status: Optional[shared_googleappsdrivelabelsv2lockstatus.GoogleAppsDriveLabelsV2LockStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lockStatus') }})
    properties: Optional[shared_googleappsdrivelabelsv2fieldproperties.GoogleAppsDriveLabelsV2FieldProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    publisher: Optional[shared_googleappsdrivelabelsv2userinfo.GoogleAppsDriveLabelsV2UserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher') }})
    query_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryKey') }})
    schema_capabilities: Optional[shared_googleappsdrivelabelsv2fieldschemacapabilities.GoogleAppsDriveLabelsV2FieldSchemaCapabilities] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaCapabilities') }})
    selection_options: Optional[shared_googleappsdrivelabelsv2fieldselectionoptions.GoogleAppsDriveLabelsV2FieldSelectionOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectionOptions') }})
    text_options: Optional[shared_googleappsdrivelabelsv2fieldtextoptions.GoogleAppsDriveLabelsV2FieldTextOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textOptions') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    updater: Optional[shared_googleappsdrivelabelsv2userinfo.GoogleAppsDriveLabelsV2UserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updater') }})
    user_options: Optional[shared_googleappsdrivelabelsv2fielduseroptions.GoogleAppsDriveLabelsV2FieldUserOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userOptions') }})
    
