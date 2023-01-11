import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class IPBlocklistResponse:
    blocklists: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocklists') }})
    ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    is_bot: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isBot') }})
    is_dshield: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDshield') }})
    is_exploit_bot: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isExploitBot') }})
    is_hijacked: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isHijacked') }})
    is_listed: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isListed') }})
    is_malware: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isMalware') }})
    is_proxy: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isProxy') }})
    is_spam_bot: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSpamBot') }})
    is_spider: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSpider') }})
    is_spyware: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSpyware') }})
    is_tor: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isTor') }})
    is_vpn: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isVpn') }})
    last_seen: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastSeen') }})
    list_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('listCount') }})
    sensors: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sensors') }})
    
