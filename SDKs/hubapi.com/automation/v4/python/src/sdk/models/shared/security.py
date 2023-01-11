import dataclasses



@dataclasses.dataclass
class SchemeDeveloperHapikey:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'hapikey' }})
    

@dataclasses.dataclass
class SchemeHapikey:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'hapikey' }})
    

@dataclasses.dataclass
class SchemeOauth2Legacy:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclasses.dataclass
class SchemePrivateAppsLegacy:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'private-app-legacy' }})
    
