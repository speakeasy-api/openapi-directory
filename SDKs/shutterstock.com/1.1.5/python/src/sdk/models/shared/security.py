import dataclasses



@dataclasses.dataclass
class SchemeBasic:
    password: str = dataclasses.field(metadata={'security': { 'field_name': 'password' }})
    username: str = dataclasses.field(metadata={'security': { 'field_name': 'username' }})
    

@dataclasses.dataclass
class SchemeCustomerAccessCode:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    
