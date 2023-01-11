import dataclasses



@dataclasses.dataclass
class SchemeSpotifyAuth:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    
