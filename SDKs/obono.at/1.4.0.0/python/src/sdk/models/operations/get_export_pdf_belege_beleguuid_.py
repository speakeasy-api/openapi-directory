import dataclasses



@dataclasses.dataclass
class GetExportPdfBelegeBelegUUIDPathParams:
    beleg_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'belegUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetExportPdfBelegeBelegUUIDRequest:
    path_params: GetExportPdfBelegeBelegUUIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetExportPdfBelegeBelegUUIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
