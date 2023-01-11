import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddiscoveryenginev1betacustomattribute as shared_googleclouddiscoveryenginev1betacustomattribute
from ..shared import googleclouddiscoveryenginev1betacompletioninfo as shared_googleclouddiscoveryenginev1betacompletioninfo
from ..shared import googleclouddiscoveryenginev1betadocumentinfo as shared_googleclouddiscoveryenginev1betadocumentinfo
from ..shared import googleclouddiscoveryenginev1betamediainfo as shared_googleclouddiscoveryenginev1betamediainfo
from ..shared import googleclouddiscoveryenginev1betapageinfo as shared_googleclouddiscoveryenginev1betapageinfo
from ..shared import googleclouddiscoveryenginev1betapanelinfo as shared_googleclouddiscoveryenginev1betapanelinfo
from ..shared import googleclouddiscoveryenginev1betasearchinfo as shared_googleclouddiscoveryenginev1betasearchinfo
from ..shared import googleclouddiscoveryenginev1betatransactioninfo as shared_googleclouddiscoveryenginev1betatransactioninfo
from ..shared import googleclouddiscoveryenginev1betauserinfo as shared_googleclouddiscoveryenginev1betauserinfo


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDiscoveryengineV1betaUserEvent:
    r"""GoogleCloudDiscoveryengineV1betaUserEvent
    UserEvent captures all metadata information Discovery Engine API needs to know about how end users interact with customers' website.
    """
    
    attributes: Optional[dict[str, shared_googleclouddiscoveryenginev1betacustomattribute.GoogleCloudDiscoveryengineV1betaCustomAttribute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    attribution_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributionToken') }})
    completion_info: Optional[shared_googleclouddiscoveryenginev1betacompletioninfo.GoogleCloudDiscoveryengineV1betaCompletionInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completionInfo') }})
    direct_user_request: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directUserRequest') }})
    documents: Optional[list[shared_googleclouddiscoveryenginev1betadocumentinfo.GoogleCloudDiscoveryengineV1betaDocumentInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documents') }})
    event_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTime') }})
    event_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    media_info: Optional[shared_googleclouddiscoveryenginev1betamediainfo.GoogleCloudDiscoveryengineV1betaMediaInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaInfo') }})
    page_info: Optional[shared_googleclouddiscoveryenginev1betapageinfo.GoogleCloudDiscoveryengineV1betaPageInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageInfo') }})
    panel: Optional[shared_googleclouddiscoveryenginev1betapanelinfo.GoogleCloudDiscoveryengineV1betaPanelInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('panel') }})
    promotion_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionIds') }})
    search_info: Optional[shared_googleclouddiscoveryenginev1betasearchinfo.GoogleCloudDiscoveryengineV1betaSearchInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchInfo') }})
    session_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionId') }})
    tag_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagIds') }})
    transaction_info: Optional[shared_googleclouddiscoveryenginev1betatransactioninfo.GoogleCloudDiscoveryengineV1betaTransactionInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionInfo') }})
    user_info: Optional[shared_googleclouddiscoveryenginev1betauserinfo.GoogleCloudDiscoveryengineV1betaUserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userInfo') }})
    user_pseudo_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userPseudoId') }})
    
