import dataclasses
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import obreaddataconsentresponse1 as shared_obreaddataconsentresponse1
from ..shared import links as shared_links
from ..shared import meta as shared_meta


@dataclass_json
@dataclasses.dataclass
class ObReadConsentResponse1:
    data: shared_obreaddataconsentresponse1.ObReadDataConsentResponse1 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    links: shared_links.Links = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Links') }})
    meta: shared_meta.Meta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Meta') }})
    risk: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Risk') }})
    
