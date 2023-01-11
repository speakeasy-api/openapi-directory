import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EventRecord:
    agent: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('agent') }})
    browsertype: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('browsertype') }})
    channel: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    click: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('click') }})
    clicks: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clicks') }})
    code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    company: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('company') }})
    contact: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact') }})
    cost: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cost') }})
    costcurrency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('costcurrency') }})
    currency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    deal: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deal') }})
    deal_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deal name') }})
    delay: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delay') }})
    denyreason: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('denyreason') }})
    device: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    devicetype: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicetype') }})
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    emailaddrsha256: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailaddrsha256') }})
    flow: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('flow') }})
    flowstep: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('flowstep') }})
    flowtype: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('flowtype') }})
    impression: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('impression') }})
    ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    latitude: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    optin: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('optin') }})
    os: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('os') }})
    resolution: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolution') }})
    revenue: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('revenue') }})
    role: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    session: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('session') }})
    site: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    site_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('site name') }})
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    user: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    userlanguage: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userlanguage') }})
    
