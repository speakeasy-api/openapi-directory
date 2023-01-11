import dataclasses



@dataclasses.dataclass
class SchemeClientID:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'PLAID-CLIENT-ID' }})
    

@dataclasses.dataclass
class SchemePlaidVersion:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'Plaid-Version' }})
    

@dataclasses.dataclass
class SchemeSecret:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'PLAID-SECRET' }})
    

@dataclasses.dataclass
class Security:
    client_id: SchemeClientID = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    plaid_version: SchemePlaidVersion = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    secret: SchemeSecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
