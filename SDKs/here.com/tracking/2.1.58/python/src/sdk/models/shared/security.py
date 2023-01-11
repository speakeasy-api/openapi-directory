import dataclasses



@dataclasses.dataclass
class SchemeAuthBearer:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclasses.dataclass
class SchemeDeviceToken:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclasses.dataclass
class SchemeSignedRequest:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    
