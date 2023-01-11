import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import manifest as shared_manifest


@dataclass_json
@dataclasses.dataclass
class CreateManifestResponseBodyManifestDownload:
    r"""CreateManifestResponseBodyManifestDownload
    Object containing the href link to download the manifest file
    """
    
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateManifestResponseBody:
    r"""CreateManifestResponseBody
    Deprecated manifest resource
    """
    
    carrier_id: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier_id') }})
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    form_id: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('form_id') }})
    manifest_download: CreateManifestResponseBodyManifestDownload = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('manifest_download') }})
    manifest_id: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('manifest_id') }})
    ship_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ship_date'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    shipments: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipments') }})
    submission_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('submission_id') }})
    warehouse_id: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('warehouse_id') }})
    manifests: Optional[list[shared_manifest.Manifest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manifests') }})
    
