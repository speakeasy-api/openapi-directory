import dataclasses



@dataclasses.dataclass
class ProductsAPIDeleteProduct2PathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProductsAPIDeleteProduct2Headers:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProductsAPIDeleteProduct2Request:
    headers: ProductsAPIDeleteProduct2Headers = dataclasses.field()
    path_params: ProductsAPIDeleteProduct2PathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProductsAPIDeleteProduct2Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
