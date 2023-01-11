import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateTagResponseBody:
    r"""CreateTagResponseBody
    Tags are arbitrary strings that you can use to categorize shipments. For example, you may want to use tags to distinguish between domestic and international shipments, or between insured and uninsured shipments.  Or maybe you want to create a tag for each of your customers so you can easily retrieve every shipment for a customer.
    
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
