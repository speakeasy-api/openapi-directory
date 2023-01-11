import dataclasses



@dataclasses.dataclass
class GetExportQrBelegeBelegUUIDPathParams:
    beleg_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'belegUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetExportQrBelegeBelegUUIDRequest:
    path_params: GetExportQrBelegeBelegUUIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetExportQrBelegeBelegUUIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
