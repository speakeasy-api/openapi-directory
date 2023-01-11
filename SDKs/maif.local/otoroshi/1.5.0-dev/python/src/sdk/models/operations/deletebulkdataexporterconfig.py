import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import patch as shared_patch


@dataclasses.dataclass
class DeletebulkDataExporterConfigSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    
class DeletebulkDataExporterConfig200ApplicationJSONStatusEnum(str, Enum):
    TWO_HUNDRED = "200"


@dataclass_json
@dataclasses.dataclass
class DeletebulkDataExporterConfig200ApplicationJSON:
    r"""DeletebulkDataExporterConfig200ApplicationJSON
    The bulk response
    """
    
    deleted: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    id: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    status: Optional[DeletebulkDataExporterConfig200ApplicationJSONStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class DeletebulkDataExporterConfigRequest:
    security: DeletebulkDataExporterConfigSecurity = dataclasses.field()
    request: Optional[list[shared_patch.Patch]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/ndjson' }})
    

@dataclasses.dataclass
class DeletebulkDataExporterConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    deletebulk_data_exporter_config_200_application_json_objects: Optional[list[DeletebulkDataExporterConfig200ApplicationJSON]] = dataclasses.field(default=None)
    
