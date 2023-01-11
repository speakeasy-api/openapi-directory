import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudcontactcenterinsightsv1exportinsightsdatarequestbigquerydestination as shared_googlecloudcontactcenterinsightsv1exportinsightsdatarequestbigquerydestination

class GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnum(str, Enum):
    WRITE_DISPOSITION_UNSPECIFIED = "WRITE_DISPOSITION_UNSPECIFIED"
    WRITE_TRUNCATE = "WRITE_TRUNCATE"
    WRITE_APPEND = "WRITE_APPEND"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest:
    r"""GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest
    The request to export insights.
    """
    
    big_query_destination: Optional[shared_googlecloudcontactcenterinsightsv1exportinsightsdatarequestbigquerydestination.GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigQueryDestination') }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    kms_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKey') }})
    parent: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    write_disposition: Optional[GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writeDisposition') }})
    
