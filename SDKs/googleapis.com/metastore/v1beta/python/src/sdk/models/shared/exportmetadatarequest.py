import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ExportMetadataRequestDatabaseDumpTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    MYSQL = "MYSQL"
    AVRO = "AVRO"


@dataclass_json
@dataclasses.dataclass
class ExportMetadataRequest:
    r"""ExportMetadataRequest
    Request message for DataprocMetastore.ExportMetadata.
    """
    
    database_dump_type: Optional[ExportMetadataRequestDatabaseDumpTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseDumpType') }})
    destination_gcs_folder: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationGcsFolder') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
