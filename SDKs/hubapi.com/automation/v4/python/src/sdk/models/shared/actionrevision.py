import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import extensionactiondefinition as shared_extensionactiondefinition


@dataclass_json
@dataclasses.dataclass
class ActionRevision:
    r"""ActionRevision
    A revision of this custom action.
    """
    
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    definition: shared_extensionactiondefinition.ExtensionActionDefinition = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    revision_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    
