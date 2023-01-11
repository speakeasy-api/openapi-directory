import dataclasses



@dataclasses.dataclass
class SchemeMerakiAPIKey:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'X-Cisco-Meraki-API-Key' }})
    

@dataclasses.dataclass
class Security:
    meraki_api_key: SchemeMerakiAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
