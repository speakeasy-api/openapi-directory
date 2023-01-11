import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RequisitionLinkParams:
    r"""RequisitionLinkParams
    RequisitionLinkParamsSerializer.
    """
    
    aspsp_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('aspsp_id') }, 'form': { 'field_name': 'aspsp_id' }, 'multipart_form': { 'field_name': 'aspsp_id' }})
    
