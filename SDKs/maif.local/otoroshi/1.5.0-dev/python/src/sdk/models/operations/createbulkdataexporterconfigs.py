import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import dataexporterconfig as shared_dataexporterconfig


@dataclasses.dataclass
class CreateBulkDataExporterConfigsSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    
class CreateBulkDataExporterConfigs200ApplicationJSONStatusEnum(str, Enum):
    TWO_HUNDRED_AND_ONE = "201"


@dataclass_json
@dataclasses.dataclass
class CreateBulkDataExporterConfigs200ApplicationJSON:
    r"""CreateBulkDataExporterConfigs200ApplicationJSON
    The bulk response
    """
    
    created: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    status: Optional[CreateBulkDataExporterConfigs200ApplicationJSONStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class CreateBulkDataExporterConfigsRequest:
    security: CreateBulkDataExporterConfigsSecurity = dataclasses.field()
    request: Optional[shared_dataexporterconfig.DataExporterConfig] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/ndjson' }})
    

@dataclasses.dataclass
class CreateBulkDataExporterConfigsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_bulk_data_exporter_configs_200_application_json_objects: Optional[list[CreateBulkDataExporterConfigs200ApplicationJSON]] = dataclasses.field(default=None)
    
