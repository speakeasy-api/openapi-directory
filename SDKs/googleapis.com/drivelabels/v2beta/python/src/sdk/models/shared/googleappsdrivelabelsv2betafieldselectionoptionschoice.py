import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleappsdrivelabelsv2betafieldselectionoptionschoiceappliedcapabilities as shared_googleappsdrivelabelsv2betafieldselectionoptionschoiceappliedcapabilities
from ..shared import googleappsdrivelabelsv2betauserinfo as shared_googleappsdrivelabelsv2betauserinfo
from ..shared import googleappsdrivelabelsv2betafieldselectionoptionschoicedisplayhints as shared_googleappsdrivelabelsv2betafieldselectionoptionschoicedisplayhints
from ..shared import googleappsdrivelabelsv2betalifecycle as shared_googleappsdrivelabelsv2betalifecycle
from ..shared import googleappsdrivelabelsv2betalockstatus as shared_googleappsdrivelabelsv2betalockstatus
from ..shared import googleappsdrivelabelsv2betafieldselectionoptionschoiceproperties as shared_googleappsdrivelabelsv2betafieldselectionoptionschoiceproperties
from ..shared import googleappsdrivelabelsv2betafieldselectionoptionschoiceschemacapabilities as shared_googleappsdrivelabelsv2betafieldselectionoptionschoiceschemacapabilities
from ..shared import googleappsdrivelabelsv2betalifecycle as shared_googleappsdrivelabelsv2betalifecycle


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice:
    r"""GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice
    Selection field choice.
    """
    
    applied_capabilities: Optional[shared_googleappsdrivelabelsv2betafieldselectionoptionschoiceappliedcapabilities.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedCapabilities') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    creator: Optional[shared_googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    disable_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableTime') }})
    disabler: Optional[shared_googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabler') }})
    display_hints: Optional[shared_googleappsdrivelabelsv2betafieldselectionoptionschoicedisplayhints.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayHints') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    lifecycle: Optional[shared_googleappsdrivelabelsv2betalifecycle.GoogleAppsDriveLabelsV2betaLifecycle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycle') }})
    lock_status: Optional[shared_googleappsdrivelabelsv2betalockstatus.GoogleAppsDriveLabelsV2betaLockStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lockStatus') }})
    properties: Optional[shared_googleappsdrivelabelsv2betafieldselectionoptionschoiceproperties.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    publish_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishTime') }})
    publisher: Optional[shared_googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher') }})
    schema_capabilities: Optional[shared_googleappsdrivelabelsv2betafieldselectionoptionschoiceschemacapabilities.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaCapabilities') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    updater: Optional[shared_googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updater') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput:
    r"""GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput
    Selection field choice.
    """
    
    applied_capabilities: Optional[shared_googleappsdrivelabelsv2betafieldselectionoptionschoiceappliedcapabilities.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedCapabilities') }})
    creator: Optional[shared_googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    disabler: Optional[shared_googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabler') }})
    display_hints: Optional[shared_googleappsdrivelabelsv2betafieldselectionoptionschoicedisplayhints.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayHints') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    lifecycle: Optional[shared_googleappsdrivelabelsv2betalifecycle.GoogleAppsDriveLabelsV2betaLifecycleInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycle') }})
    properties: Optional[shared_googleappsdrivelabelsv2betafieldselectionoptionschoiceproperties.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    publisher: Optional[shared_googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher') }})
    schema_capabilities: Optional[shared_googleappsdrivelabelsv2betafieldselectionoptionschoiceschemacapabilities.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaCapabilities') }})
    updater: Optional[shared_googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updater') }})
    
