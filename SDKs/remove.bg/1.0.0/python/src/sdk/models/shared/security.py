import dataclasses



@dataclasses.dataclass
class SchemeAPIKeyHeader:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'X-API-Key' }})
    

@dataclasses.dataclass
class Security:
    api_key_header: SchemeAPIKeyHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
