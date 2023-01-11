import dataclasses



@dataclasses.dataclass
class SchemeApimKey:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'Training-Key' }})
    

@dataclasses.dataclass
class Security:
    apim_key: SchemeApimKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
