import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dsrecord as shared_dsrecord

class GoogleDomainsDNSDsStateEnum(str, Enum):
    DS_STATE_UNSPECIFIED = "DS_STATE_UNSPECIFIED"
    DS_RECORDS_UNPUBLISHED = "DS_RECORDS_UNPUBLISHED"
    DS_RECORDS_PUBLISHED = "DS_RECORDS_PUBLISHED"


@dataclass_json
@dataclasses.dataclass
class GoogleDomainsDNS:
    r"""GoogleDomainsDNS
    Configuration for using the free DNS zone provided by Google Domains as a `Registration`'s `dns_provider`. You cannot configure the DNS zone itself using the API. To configure the DNS zone, go to [Google Domains](https://domains.google/).
    """
    
    ds_records: Optional[list[shared_dsrecord.DsRecord]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dsRecords') }})
    ds_state: Optional[GoogleDomainsDNSDsStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dsState') }})
    name_servers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameServers') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleDomainsDNSInput:
    r"""GoogleDomainsDNSInput
    Configuration for using the free DNS zone provided by Google Domains as a `Registration`'s `dns_provider`. You cannot configure the DNS zone itself using the API. To configure the DNS zone, go to [Google Domains](https://domains.google/).
    """
    
    ds_state: Optional[GoogleDomainsDNSDsStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dsState') }})
    
