import dataclasses



@dataclasses.dataclass
class SchemeXMathtoolsAPISecret:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'X-Mathtools-Api-Secret' }})
    
