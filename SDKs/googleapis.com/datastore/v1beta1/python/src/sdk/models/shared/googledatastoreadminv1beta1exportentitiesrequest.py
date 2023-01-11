import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googledatastoreadminv1beta1entityfilter as shared_googledatastoreadminv1beta1entityfilter


@dataclass_json
@dataclasses.dataclass
class GoogleDatastoreAdminV1beta1ExportEntitiesRequest:
    r"""GoogleDatastoreAdminV1beta1ExportEntitiesRequest
    The request for google.datastore.admin.v1beta1.DatastoreAdmin.ExportEntities.
    """
    
    entity_filter: Optional[shared_googledatastoreadminv1beta1entityfilter.GoogleDatastoreAdminV1beta1EntityFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityFilter') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    output_url_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputUrlPrefix') }})
    
