import dataclasses
from typing import Optional


@dataclasses.dataclass
class SubmitPodcastForm:
    rss: str = dataclasses.field(metadata={'form': { 'field_name': 'rss' }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'email' }})
    
