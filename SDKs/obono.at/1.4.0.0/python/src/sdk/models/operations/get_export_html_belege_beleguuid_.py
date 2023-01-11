import dataclasses



@dataclasses.dataclass
class GetExportHTMLBelegeBelegUUIDPathParams:
    beleg_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'belegUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetExportHTMLBelegeBelegUUIDRequest:
    path_params: GetExportHTMLBelegeBelegUUIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetExportHTMLBelegeBelegUUIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
