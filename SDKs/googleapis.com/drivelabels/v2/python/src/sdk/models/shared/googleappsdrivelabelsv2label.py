import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleappsdrivelabelsv2labelappliedcapabilities as shared_googleappsdrivelabelsv2labelappliedcapabilities
from ..shared import googleappsdrivelabelsv2labelappliedlabelpolicy as shared_googleappsdrivelabelsv2labelappliedlabelpolicy
from ..shared import googleappsdrivelabelsv2userinfo as shared_googleappsdrivelabelsv2userinfo
from ..shared import googleappsdrivelabelsv2labeldisplayhints as shared_googleappsdrivelabelsv2labeldisplayhints
from ..shared import googleappsdrivelabelsv2field as shared_googleappsdrivelabelsv2field
from ..shared import googleappsdrivelabelsv2lifecycle as shared_googleappsdrivelabelsv2lifecycle
from ..shared import googleappsdrivelabelsv2lockstatus as shared_googleappsdrivelabelsv2lockstatus
from ..shared import googleappsdrivelabelsv2labelproperties as shared_googleappsdrivelabelsv2labelproperties
from ..shared import googleappsdrivelabelsv2labelschemacapabilities as shared_googleappsdrivelabelsv2labelschemacapabilities

class GoogleAppsDriveLabelsV2LabelLabelTypeEnum(str, Enum):
    LABEL_TYPE_UNSPECIFIED = "LABEL_TYPE_UNSPECIFIED"
    SHARED = "SHARED"
    ADMIN = "ADMIN"


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2Label:
    r"""GoogleAppsDriveLabelsV2Label
    A label defines a taxonomy that can be applied to Drive items in order to organize and search across items. Labels can be simple strings, or can contain fields that describe additional metadata that can be further used to organize and search Drive items.
    """
    
    applied_capabilities: Optional[shared_googleappsdrivelabelsv2labelappliedcapabilities.GoogleAppsDriveLabelsV2LabelAppliedCapabilities] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedCapabilities') }})
    applied_label_policy: Optional[shared_googleappsdrivelabelsv2labelappliedlabelpolicy.GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedLabelPolicy') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    creator: Optional[shared_googleappsdrivelabelsv2userinfo.GoogleAppsDriveLabelsV2UserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    disable_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableTime') }})
    disabler: Optional[shared_googleappsdrivelabelsv2userinfo.GoogleAppsDriveLabelsV2UserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabler') }})
    display_hints: Optional[shared_googleappsdrivelabelsv2labeldisplayhints.GoogleAppsDriveLabelsV2LabelDisplayHints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayHints') }})
    fields: Optional[list[shared_googleappsdrivelabelsv2field.GoogleAppsDriveLabelsV2Field]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label_type: Optional[GoogleAppsDriveLabelsV2LabelLabelTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelType') }})
    learn_more_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('learnMoreUri') }})
    lifecycle: Optional[shared_googleappsdrivelabelsv2lifecycle.GoogleAppsDriveLabelsV2Lifecycle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycle') }})
    lock_status: Optional[shared_googleappsdrivelabelsv2lockstatus.GoogleAppsDriveLabelsV2LockStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lockStatus') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    properties: Optional[shared_googleappsdrivelabelsv2labelproperties.GoogleAppsDriveLabelsV2LabelProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    publish_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishTime') }})
    publisher: Optional[shared_googleappsdrivelabelsv2userinfo.GoogleAppsDriveLabelsV2UserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher') }})
    revision_create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionCreateTime') }})
    revision_creator: Optional[shared_googleappsdrivelabelsv2userinfo.GoogleAppsDriveLabelsV2UserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionCreator') }})
    revision_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    schema_capabilities: Optional[shared_googleappsdrivelabelsv2labelschemacapabilities.GoogleAppsDriveLabelsV2LabelSchemaCapabilities] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaCapabilities') }})
    
