import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import optional_link as shared_optional_link


@dataclass_json
@dataclasses.dataclass
class BatchOptionalLink:
    r"""BatchOptionalLink
    A link to a related resource, or an empty object if there is no resource to link to
    """
    
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class BatchLabelDownload:
    r"""BatchLabelDownload
    Reference to the various downloadable file formats for the generated label
    
    """
    
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    pdf: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pdf') }})
    png: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('png') }})
    zpl: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zpl') }})
    

@dataclass_json
@dataclasses.dataclass
class Batch:
    r"""Batch
    Batches are an advanced feature of ShipEngine designed for users who need to generate hundreds or
    thousands of labels at a time.
    
    """
    
    batch_errors_url: BatchOptionalLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('batch_errors_url') }})
    batch_id: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('batch_id') }})
    batch_labels_url: shared_optional_link.OptionalLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('batch_labels_url') }})
    batch_notes: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('batch_notes') }})
    batch_shipments_url: shared_optional_link.OptionalLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('batch_shipments_url') }})
    completed: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('completed') }})
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    created_at: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    errors: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    external_batch_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_batch_id') }})
    form_download: BatchOptionalLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('form_download') }})
    forms: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('forms') }})
    label_download: BatchLabelDownload = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_download') }})
    label_format: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_format') }})
    label_layout: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_layout') }})
    processed_at: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('processed_at') }})
    status: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    warnings: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
