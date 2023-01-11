import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import d2passociation as shared_d2passociation
from ..shared import compactassociationset as shared_compactassociationset


@dataclass_json
@dataclasses.dataclass
class D2PAssociationResults:
    associations: Optional[list[shared_d2passociation.D2PAssociation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associations') }})
    compact_associations: Optional[list[shared_compactassociationset.CompactAssociationSet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compact_associations') }})
    docs: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('docs') }})
    facet_counts: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('facet_counts') }})
    highlighting: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highlighting') }})
    num_found: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numFound') }})
    objects: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objects') }})
    
