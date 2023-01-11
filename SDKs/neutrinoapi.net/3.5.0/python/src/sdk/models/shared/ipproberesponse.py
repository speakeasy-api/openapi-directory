import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class IPProbeResponse:
    as_age: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('asAge') }})
    as_cidr: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('asCidr') }})
    as_country_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('asCountryCode') }})
    as_country_code3: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('asCountryCode3') }})
    as_description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('asDescription') }})
    as_domains: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('asDomains') }})
    asn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('asn') }})
    city: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    continent_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('continentCode') }})
    country: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    country_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode') }})
    country_code3: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode3') }})
    currency_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    host_domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostDomain') }})
    hostname: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    is_bogon: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isBogon') }})
    is_hosting: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isHosting') }})
    is_isp: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isIsp') }})
    is_proxy: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isProxy') }})
    is_v4_mapped: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isV4Mapped') }})
    is_v6: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isV6') }})
    is_vpn: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isVpn') }})
    provider_description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerDescription') }})
    provider_domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerDomain') }})
    provider_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerType') }})
    provider_website: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerWebsite') }})
    region: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    valid: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('valid') }})
    vpn_domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpnDomain') }})
    
