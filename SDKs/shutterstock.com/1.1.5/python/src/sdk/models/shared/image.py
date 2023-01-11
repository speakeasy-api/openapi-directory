import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imageassets as shared_imageassets
from ..shared import category as shared_category
from ..shared import contributor as shared_contributor
from ..shared import modelrelease as shared_modelrelease
from ..shared import model as shared_model


@dataclass_json
@dataclasses.dataclass
class Image:
    r"""Image
    Information about an image
    """
    
    contributor: shared_contributor.Contributor = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contributor') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    media_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('media_type') }})
    added_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    affiliate_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('affiliate_url') }})
    aspect: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aspect') }})
    assets: Optional[shared_imageassets.ImageAssets] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    categories: Optional[list[shared_category.Category]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    has_model_release: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_model_release') }})
    has_property_release: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_property_release') }})
    image_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_type') }})
    is_adult: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_adult') }})
    is_editorial: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_editorial') }})
    is_illustration: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_illustration') }})
    keywords: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keywords') }})
    model_releases: Optional[list[shared_modelrelease.ModelRelease]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model_releases') }})
    models: Optional[list[shared_model.Model]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('models') }})
    releases: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releases') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
