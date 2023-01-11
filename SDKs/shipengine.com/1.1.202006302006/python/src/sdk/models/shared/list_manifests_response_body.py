import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import link as shared_link
from ..shared import optional_link as shared_optional_link


@dataclass_json
@dataclasses.dataclass
class ListManifestsResponseBodyPaginationLink:
    r"""ListManifestsResponseBodyPaginationLink
    Helpful links to other pages of results
    """
    
    first: shared_link.Link = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('first') }})
    last: shared_link.Link = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last') }})
    next: shared_optional_link.OptionalLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    prev: shared_optional_link.OptionalLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    

@dataclass_json
@dataclasses.dataclass
class ListManifestsResponseBodyManifestManifestDownload:
    r"""ListManifestsResponseBodyManifestManifestDownload
    Object containing the href link to download the manifest file
    """
    
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclasses.dataclass
class ListManifestsResponseBodyManifest:
    r"""ListManifestsResponseBodyManifest
    Used for combining packages into one scannable form that a carrier can use when picking up a large
    number of shipments
    
    """
    
    carrier_id: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier_id') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    form_id: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form_id') }})
    manifest_download: Optional[ListManifestsResponseBodyManifestManifestDownload] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manifest_download') }})
    manifest_id: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manifest_id') }})
    ship_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ship_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    shipments: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipments') }})
    submission_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('submission_id') }})
    warehouse_id: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warehouse_id') }})
    

@dataclass_json
@dataclasses.dataclass
class ListManifestsResponseBody:
    r"""ListManifestsResponseBody
    A list manifests response body
    """
    
    links: ListManifestsResponseBodyPaginationLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    manifests: list[ListManifestsResponseBodyManifest] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('manifests') }})
    page: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    pages: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    total: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    
