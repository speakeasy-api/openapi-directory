import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2bigquerytable as shared_googleprivacydlpv2bigquerytable

class GooglePrivacyDlpV2OutputStorageConfigOutputSchemaEnum(str, Enum):
    OUTPUT_SCHEMA_UNSPECIFIED = "OUTPUT_SCHEMA_UNSPECIFIED"
    BASIC_COLUMNS = "BASIC_COLUMNS"
    GCS_COLUMNS = "GCS_COLUMNS"
    DATASTORE_COLUMNS = "DATASTORE_COLUMNS"
    BIG_QUERY_COLUMNS = "BIG_QUERY_COLUMNS"
    ALL_COLUMNS = "ALL_COLUMNS"


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2OutputStorageConfig:
    r"""GooglePrivacyDlpV2OutputStorageConfig
    Cloud repository for storing output.
    """
    
    output_schema: Optional[GooglePrivacyDlpV2OutputStorageConfigOutputSchemaEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputSchema') }})
    table: Optional[shared_googleprivacydlpv2bigquerytable.GooglePrivacyDlpV2BigQueryTable] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('table') }})
    
