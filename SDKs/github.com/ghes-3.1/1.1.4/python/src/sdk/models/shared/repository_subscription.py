import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RepositorySubscription:
    r"""RepositorySubscription
    Repository invitations let you manage who you collaborate with.
    """
    
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ignored: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignored') }})
    reason: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    repository_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository_url') }})
    subscribed: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscribed') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
