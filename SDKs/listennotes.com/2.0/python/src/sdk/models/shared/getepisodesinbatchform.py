import dataclasses



@dataclasses.dataclass
class GetEpisodesInBatchForm:
    ids: str = dataclasses.field(metadata={'form': { 'field_name': 'ids' }})
    
