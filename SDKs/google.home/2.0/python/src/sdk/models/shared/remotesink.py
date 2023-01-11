import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RemoteSink:
    bond_date: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bond_date') }})
    device_class: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_class') }})
    device_type: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_type') }})
    last_connect_date: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_connect_date') }})
    mac_address: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac_address') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rssi: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rssi') }})
    service_uuids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_uuids') }})
    
