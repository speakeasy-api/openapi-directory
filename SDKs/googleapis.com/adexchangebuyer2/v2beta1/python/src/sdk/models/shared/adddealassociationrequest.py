import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import creativedealassociation as shared_creativedealassociation


@dataclass_json
@dataclasses.dataclass
class AddDealAssociationRequest:
    r"""AddDealAssociationRequest
    A request for associating a deal and a creative.
    """
    
    association: Optional[shared_creativedealassociation.CreativeDealAssociation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('association') }})
    
