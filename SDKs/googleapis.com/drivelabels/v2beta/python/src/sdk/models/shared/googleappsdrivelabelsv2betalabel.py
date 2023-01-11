import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleappsdrivelabelsv2betalabelappliedcapabilities as shared_googleappsdrivelabelsv2betalabelappliedcapabilities
from ..shared import googleappsdrivelabelsv2betalabelappliedlabelpolicy as shared_googleappsdrivelabelsv2betalabelappliedlabelpolicy
from ..shared import googleappsdrivelabelsv2betauserinfo as shared_googleappsdrivelabelsv2betauserinfo
from ..shared import googleappsdrivelabelsv2betalabeldisplayhints as shared_googleappsdrivelabelsv2betalabeldisplayhints
from ..shared import googleappsdrivelabelsv2betafield as shared_googleappsdrivelabelsv2betafield
from ..shared import googleappsdrivelabelsv2betalifecycle as shared_googleappsdrivelabelsv2betalifecycle
from ..shared import googleappsdrivelabelsv2betalockstatus as shared_googleappsdrivelabelsv2betalockstatus
from ..shared import googleappsdrivelabelsv2betalabelproperties as shared_googleappsdrivelabelsv2betalabelproperties
from ..shared import googleappsdrivelabelsv2betalabelschemacapabilities as shared_googleappsdrivelabelsv2betalabelschemacapabilities
from ..shared import googleappsdrivelabelsv2betafield as shared_googleappsdrivelabelsv2betafield
from ..shared import googleappsdrivelabelsv2betalifecycle as shared_googleappsdrivelabelsv2betalifecycle

class GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum(str, Enum):
    LABEL_TYPE_UNSPECIFIED = "LABEL_TYPE_UNSPECIFIED"
    SHARED = "SHARED"
    ADMIN = "ADMIN"


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaLabel:
    r"""GoogleAppsDriveLabelsV2betaLabel
    A label defines a taxonomy that can be applied to Drive items in order to organize and search across items. Labels can be simple strings, or can contain fields that describe additional metadata that can be further used to organize and search Drive items.
    """
    
    applied_capabilities: Optional[shared_googleappsdrivelabelsv2betalabelappliedcapabilities.GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedCapabilities') }})
    applied_label_policy: Optional[shared_googleappsdrivelabelsv2betalabelappliedlabelpolicy.GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedLabelPolicy') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    creator: Optional[shared_googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    disable_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableTime') }})
    disabler: Optional[shared_googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabler') }})
    display_hints: Optional[shared_googleappsdrivelabelsv2betalabeldisplayhints.GoogleAppsDriveLabelsV2betaLabelDisplayHints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayHints') }})
    fields: Optional[list[shared_googleappsdrivelabelsv2betafield.GoogleAppsDriveLabelsV2betaField]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label_type: Optional[GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelType') }})
    learn_more_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('learnMoreUri') }})
    lifecycle: Optional[shared_googleappsdrivelabelsv2betalifecycle.GoogleAppsDriveLabelsV2betaLifecycle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycle') }})
    lock_status: Optional[shared_googleappsdrivelabelsv2betalockstatus.GoogleAppsDriveLabelsV2betaLockStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lockStatus') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    properties: Optional[shared_googleappsdrivelabelsv2betalabelproperties.GoogleAppsDriveLabelsV2betaLabelProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    publish_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishTime') }})
    publisher: Optional[shared_googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher') }})
    revision_create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionCreateTime') }})
    revision_creator: Optional[shared_googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionCreator') }})
    revision_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    schema_capabilities: Optional[shared_googleappsdrivelabelsv2betalabelschemacapabilities.GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaCapabilities') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaLabelInput:
    r"""GoogleAppsDriveLabelsV2betaLabelInput
    A label defines a taxonomy that can be applied to Drive items in order to organize and search across items. Labels can be simple strings, or can contain fields that describe additional metadata that can be further used to organize and search Drive items.
    """
    
    applied_capabilities: Optional[shared_googleappsdrivelabelsv2betalabelappliedcapabilities.GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedCapabilities') }})
    applied_label_policy: Optional[shared_googleappsdrivelabelsv2betalabelappliedlabelpolicy.GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedLabelPolicy') }})
    creator: Optional[shared_googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    disabler: Optional[shared_googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabler') }})
    display_hints: Optional[shared_googleappsdrivelabelsv2betalabeldisplayhints.GoogleAppsDriveLabelsV2betaLabelDisplayHints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayHints') }})
    fields: Optional[list[shared_googleappsdrivelabelsv2betafield.GoogleAppsDriveLabelsV2betaFieldInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    label_type: Optional[GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelType') }})
    learn_more_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('learnMoreUri') }})
    lifecycle: Optional[shared_googleappsdrivelabelsv2betalifecycle.GoogleAppsDriveLabelsV2betaLifecycleInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycle') }})
    properties: Optional[shared_googleappsdrivelabelsv2betalabelproperties.GoogleAppsDriveLabelsV2betaLabelProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    publisher: Optional[shared_googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher') }})
    revision_creator: Optional[shared_googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionCreator') }})
    schema_capabilities: Optional[shared_googleappsdrivelabelsv2betalabelschemacapabilities.GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaCapabilities') }})
    
