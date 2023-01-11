import dataclasses



@dataclasses.dataclass
class SchemeXTheySaidSoAPISecret:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'X-TheySaidSo-Api-Secret' }})
    
