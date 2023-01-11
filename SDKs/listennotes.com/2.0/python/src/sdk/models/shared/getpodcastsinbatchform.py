import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class GetPodcastsInBatchForm:
    ids: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ids' }})
    itunes_ids: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'itunes_ids' }})
    next_episode_pub_date: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'next_episode_pub_date' }})
    rsses: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'rsses' }})
    show_latest_episodes: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'show_latest_episodes' }})
    
