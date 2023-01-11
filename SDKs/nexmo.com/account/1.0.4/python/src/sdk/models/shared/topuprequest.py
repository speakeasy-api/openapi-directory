import dataclasses



@dataclasses.dataclass
class TopupRequest:
    trx: str = dataclasses.field(metadata={'form': { 'field_name': 'trx' }})
    
