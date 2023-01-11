import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AnalyticsDataimportDeleteUploadDataRequest:
    r"""AnalyticsDataimportDeleteUploadDataRequest
    Request template for the delete upload data request.
    """
    
    custom_data_import_uids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customDataImportUids') }})
    
