import dataclasses



@dataclasses.dataclass
class DeleteImagesPathParams:
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteImagesQueryParams:
    image_ids: list[str] = dataclasses.field(metadata={'query_param': { 'field_name': 'imageIds', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class DeleteImagesHeaders:
    training_key: str = dataclasses.field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteImagesRequest:
    headers: DeleteImagesHeaders = dataclasses.field()
    path_params: DeleteImagesPathParams = dataclasses.field()
    query_params: DeleteImagesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteImagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
