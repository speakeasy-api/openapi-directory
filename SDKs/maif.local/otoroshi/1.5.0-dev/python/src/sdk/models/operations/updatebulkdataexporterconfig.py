import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import dataexporterconfig as shared_dataexporterconfig


@dataclasses.dataclass
class UpdateBulkDataExporterConfigSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    
class UpdateBulkDataExporterConfig200ApplicationJSONStatusEnum(str, Enum):
    TWO_HUNDRED = "200"


@dataclass_json
@dataclasses.dataclass
class UpdateBulkDataExporterConfig200ApplicationJSON:
    r"""UpdateBulkDataExporterConfig200ApplicationJSON
    The bulk response
    """
    
    id: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    status: Optional[UpdateBulkDataExporterConfig200ApplicationJSONStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    updated: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated') }})
    

@dataclasses.dataclass
class UpdateBulkDataExporterConfigRequest:
    security: UpdateBulkDataExporterConfigSecurity = dataclasses.field()
    request: Optional[shared_dataexporterconfig.DataExporterConfig] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/ndjson' }})
    

@dataclasses.dataclass
class UpdateBulkDataExporterConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_bulk_data_exporter_config_200_application_json_objects: Optional[list[UpdateBulkDataExporterConfig200ApplicationJSON]] = dataclasses.field(default=None)
    
