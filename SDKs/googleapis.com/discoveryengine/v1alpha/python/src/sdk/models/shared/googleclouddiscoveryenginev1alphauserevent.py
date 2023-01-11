import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddiscoveryenginev1alphacustomattribute as shared_googleclouddiscoveryenginev1alphacustomattribute
from ..shared import googleclouddiscoveryenginev1alphacompletioninfo as shared_googleclouddiscoveryenginev1alphacompletioninfo
from ..shared import googleclouddiscoveryenginev1alphadocumentinfo as shared_googleclouddiscoveryenginev1alphadocumentinfo
from ..shared import googleclouddiscoveryenginev1alphamediainfo as shared_googleclouddiscoveryenginev1alphamediainfo
from ..shared import googleclouddiscoveryenginev1alphapageinfo as shared_googleclouddiscoveryenginev1alphapageinfo
from ..shared import googleclouddiscoveryenginev1alphapanelinfo as shared_googleclouddiscoveryenginev1alphapanelinfo
from ..shared import googleclouddiscoveryenginev1alphasearchinfo as shared_googleclouddiscoveryenginev1alphasearchinfo
from ..shared import googleclouddiscoveryenginev1alphatransactioninfo as shared_googleclouddiscoveryenginev1alphatransactioninfo
from ..shared import googleclouddiscoveryenginev1alphauserinfo as shared_googleclouddiscoveryenginev1alphauserinfo


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDiscoveryengineV1alphaUserEvent:
    r"""GoogleCloudDiscoveryengineV1alphaUserEvent
    UserEvent captures all metadata information Discovery Engine API needs to know about how end users interact with customers' website.
    """
    
    attributes: Optional[dict[str, shared_googleclouddiscoveryenginev1alphacustomattribute.GoogleCloudDiscoveryengineV1alphaCustomAttribute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    attribution_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributionToken') }})
    completion_info: Optional[shared_googleclouddiscoveryenginev1alphacompletioninfo.GoogleCloudDiscoveryengineV1alphaCompletionInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completionInfo') }})
    direct_user_request: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directUserRequest') }})
    documents: Optional[list[shared_googleclouddiscoveryenginev1alphadocumentinfo.GoogleCloudDiscoveryengineV1alphaDocumentInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documents') }})
    event_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTime') }})
    event_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    media_info: Optional[shared_googleclouddiscoveryenginev1alphamediainfo.GoogleCloudDiscoveryengineV1alphaMediaInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaInfo') }})
    page_info: Optional[shared_googleclouddiscoveryenginev1alphapageinfo.GoogleCloudDiscoveryengineV1alphaPageInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageInfo') }})
    panel: Optional[shared_googleclouddiscoveryenginev1alphapanelinfo.GoogleCloudDiscoveryengineV1alphaPanelInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('panel') }})
    promotion_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionIds') }})
    search_info: Optional[shared_googleclouddiscoveryenginev1alphasearchinfo.GoogleCloudDiscoveryengineV1alphaSearchInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchInfo') }})
    session_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionId') }})
    tag_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagIds') }})
    transaction_info: Optional[shared_googleclouddiscoveryenginev1alphatransactioninfo.GoogleCloudDiscoveryengineV1alphaTransactionInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionInfo') }})
    user_info: Optional[shared_googleclouddiscoveryenginev1alphauserinfo.GoogleCloudDiscoveryengineV1alphaUserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userInfo') }})
    user_pseudo_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userPseudoId') }})
    
