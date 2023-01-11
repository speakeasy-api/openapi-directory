import dataclasses



@dataclasses.dataclass
class ProductsAPIDeleteProductPathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProductsAPIDeleteProductHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProductsAPIDeleteProductRequest:
    headers: ProductsAPIDeleteProductHeaders = dataclasses.field()
    path_params: ProductsAPIDeleteProductPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProductsAPIDeleteProductResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
