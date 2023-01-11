import dataclasses



@dataclasses.dataclass
class DeleteImageRegionsPathParams:
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteImageRegionsQueryParams:
    region_ids: list[str] = dataclasses.field(metadata={'query_param': { 'field_name': 'regionIds', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class DeleteImageRegionsHeaders:
    training_key: str = dataclasses.field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteImageRegionsRequest:
    headers: DeleteImageRegionsHeaders = dataclasses.field()
    path_params: DeleteImageRegionsPathParams = dataclasses.field()
    query_params: DeleteImageRegionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteImageRegionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
