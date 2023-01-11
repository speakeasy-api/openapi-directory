import dataclasses



@dataclasses.dataclass
class DeleteOrganizationInsightMonitoredMediaServerPathParams:
    monitored_media_server_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'monitoredMediaServerId', 'style': 'simple', 'explode': False }})
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteOrganizationInsightMonitoredMediaServerRequest:
    path_params: DeleteOrganizationInsightMonitoredMediaServerPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteOrganizationInsightMonitoredMediaServerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
