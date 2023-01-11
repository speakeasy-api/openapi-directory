import dataclasses



@dataclasses.dataclass
class ActionsDownloadJobLogsForWorkflowRunPathParams:
    job_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'job_id', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsDownloadJobLogsForWorkflowRunRequest:
    path_params: ActionsDownloadJobLogsForWorkflowRunPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsDownloadJobLogsForWorkflowRunResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    
