import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleappsdrivelabelsv2fieldselectionoptionschoiceappliedcapabilities as shared_googleappsdrivelabelsv2fieldselectionoptionschoiceappliedcapabilities
from ..shared import googleappsdrivelabelsv2userinfo as shared_googleappsdrivelabelsv2userinfo
from ..shared import googleappsdrivelabelsv2fieldselectionoptionschoicedisplayhints as shared_googleappsdrivelabelsv2fieldselectionoptionschoicedisplayhints
from ..shared import googleappsdrivelabelsv2lifecycle as shared_googleappsdrivelabelsv2lifecycle
from ..shared import googleappsdrivelabelsv2lockstatus as shared_googleappsdrivelabelsv2lockstatus
from ..shared import googleappsdrivelabelsv2fieldselectionoptionschoiceproperties as shared_googleappsdrivelabelsv2fieldselectionoptionschoiceproperties
from ..shared import googleappsdrivelabelsv2fieldselectionoptionschoiceschemacapabilities as shared_googleappsdrivelabelsv2fieldselectionoptionschoiceschemacapabilities


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice:
    r"""GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice
    Selection field choice.
    """
    
    applied_capabilities: Optional[shared_googleappsdrivelabelsv2fieldselectionoptionschoiceappliedcapabilities.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedCapabilities') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    creator: Optional[shared_googleappsdrivelabelsv2userinfo.GoogleAppsDriveLabelsV2UserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    disable_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableTime') }})
    disabler: Optional[shared_googleappsdrivelabelsv2userinfo.GoogleAppsDriveLabelsV2UserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabler') }})
    display_hints: Optional[shared_googleappsdrivelabelsv2fieldselectionoptionschoicedisplayhints.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayHints') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    lifecycle: Optional[shared_googleappsdrivelabelsv2lifecycle.GoogleAppsDriveLabelsV2Lifecycle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycle') }})
    lock_status: Optional[shared_googleappsdrivelabelsv2lockstatus.GoogleAppsDriveLabelsV2LockStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lockStatus') }})
    properties: Optional[shared_googleappsdrivelabelsv2fieldselectionoptionschoiceproperties.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    publish_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishTime') }})
    publisher: Optional[shared_googleappsdrivelabelsv2userinfo.GoogleAppsDriveLabelsV2UserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher') }})
    schema_capabilities: Optional[shared_googleappsdrivelabelsv2fieldselectionoptionschoiceschemacapabilities.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaCapabilities') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    updater: Optional[shared_googleappsdrivelabelsv2userinfo.GoogleAppsDriveLabelsV2UserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updater') }})
    
