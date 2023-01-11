import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PublicUserPlan:
    collaborators: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('collaborators') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    private_repos: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_repos') }})
    space: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('space') }})
    

@dataclass_json
@dataclasses.dataclass
class PublicUser:
    r"""PublicUser
    Public User
    """
    
    avatar_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('avatar_url') }})
    bio: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bio') }})
    blog: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blog') }})
    company: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('company') }})
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    events_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('events_url') }})
    followers: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers') }})
    followers_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers_url') }})
    following: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('following') }})
    following_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('following_url') }})
    gists_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gists_url') }})
    gravatar_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gravatar_id') }})
    hireable: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hireable') }})
    html_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    location: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    login: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    organizations_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizations_url') }})
    public_gists: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_gists') }})
    public_repos: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_repos') }})
    received_events_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('received_events_url') }})
    repos_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repos_url') }})
    site_admin: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('site_admin') }})
    starred_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('starred_url') }})
    subscriptions_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptions_url') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    updated_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    collaborators: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collaborators') }})
    disk_usage: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk_usage') }})
    owned_private_repos: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owned_private_repos') }})
    plan: Optional[PublicUserPlan] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan') }})
    private_gists: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_gists') }})
    suspended_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspended_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    total_private_repos: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_private_repos') }})
    twitter_username: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('twitter_username') }})
    
