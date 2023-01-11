import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import categorydto as shared_categorydto
from ..shared import metadatadto as shared_metadatadto
from ..shared import onlineproperties as shared_onlineproperties
from ..shared import presentationdto as shared_presentationdto
from ..shared import variantoptiondefinitions as shared_variantoptiondefinitions
from ..shared import variantdto as shared_variantdto


@dataclass_json
@dataclasses.dataclass
class ProductResponse:
    created: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    etag: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    updated: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    uuid: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    variants: list[shared_variantdto.VariantDto] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('variants') }})
    categories: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    category: Optional[shared_categorydto.CategoryDto] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    external_reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalReference') }})
    image_lookup_keys: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageLookupKeys') }})
    metadata: Optional[shared_metadatadto.MetadataDto] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    online: Optional[shared_onlineproperties.OnlineProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('online') }})
    presentation: Optional[shared_presentationdto.PresentationDto] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('presentation') }})
    tax_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxCode') }})
    tax_exempt: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxExempt') }})
    tax_rates: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxRates') }})
    unit_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unitName') }})
    updated_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedBy') }})
    variant_option_definitions: Optional[shared_variantoptiondefinitions.VariantOptionDefinitions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variantOptionDefinitions') }})
    vat_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vatPercentage') }})
    
