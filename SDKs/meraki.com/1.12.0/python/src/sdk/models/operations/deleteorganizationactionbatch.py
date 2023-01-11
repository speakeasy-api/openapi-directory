import dataclasses



@dataclasses.dataclass
class DeleteOrganizationActionBatchPathParams:
    action_batch_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'actionBatchId', 'style': 'simple', 'explode': False }})
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteOrganizationActionBatchRequest:
    path_params: DeleteOrganizationActionBatchPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteOrganizationActionBatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
