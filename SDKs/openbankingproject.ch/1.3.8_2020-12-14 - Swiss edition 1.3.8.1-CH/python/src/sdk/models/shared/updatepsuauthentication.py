import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import psudata as shared_psudata


@dataclass_json
@dataclasses.dataclass
class UpdatePsuAuthentication:
    r"""UpdatePsuAuthentication
    Content of the body of a Update PSU authentication request
    
    Password subfield is used.
    
    """
    
    psu_data: shared_psudata.PsuData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('psuData') }})
    
