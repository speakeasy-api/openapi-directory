import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import slack as shared_slack


@dataclasses.dataclass
class GetTargetsTargetIDIntegrationsSlackPathParams:
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDIntegrationsSlack401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDIntegrationsSlack403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class GetTargetsTargetIDIntegrationsSlackRequest:
    path_params: GetTargetsTargetIDIntegrationsSlackPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTargetsTargetIDIntegrationsSlackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    slack: Optional[shared_slack.Slack] = dataclasses.field(default=None)
    get_targets_target_id_integrations_slack_401_application_json_object: Optional[GetTargetsTargetIDIntegrationsSlack401ApplicationJSON] = dataclasses.field(default=None)
    get_targets_target_id_integrations_slack_403_application_json_object: Optional[GetTargetsTargetIDIntegrationsSlack403ApplicationJSON] = dataclasses.field(default=None)
    
