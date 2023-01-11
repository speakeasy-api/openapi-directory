import dataclasses
from typing import Optional


@dataclasses.dataclass
class BadgesUserBadgeCounts:
    bronze: Optional[int] = dataclasses.field(default=None)
    gold: Optional[int] = dataclasses.field(default=None)
    silver: Optional[int] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class BadgesUser:
    accept_rate: Optional[int] = dataclasses.field(default=None)
    badge_counts: Optional[BadgesUserBadgeCounts] = dataclasses.field(default=None)
    display_name: Optional[str] = dataclasses.field(default=None)
    link: Optional[str] = dataclasses.field(default=None)
    profile_image: Optional[str] = dataclasses.field(default=None)
    reputation: Optional[int] = dataclasses.field(default=None)
    user_id: Optional[int] = dataclasses.field(default=None)
    user_type: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class Badges:
    award_count: Optional[int] = dataclasses.field(default=None)
    badge_id: Optional[int] = dataclasses.field(default=None)
    badge_type: Optional[str] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    link: Optional[str] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    rank: Optional[str] = dataclasses.field(default=None)
    user: Optional[BadgesUser] = dataclasses.field(default=None)
    
