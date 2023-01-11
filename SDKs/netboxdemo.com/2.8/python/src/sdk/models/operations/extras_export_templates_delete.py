import dataclasses



@dataclasses.dataclass
class ExtrasExportTemplatesDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExtrasExportTemplatesDeleteRequest:
    path_params: ExtrasExportTemplatesDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ExtrasExportTemplatesDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
