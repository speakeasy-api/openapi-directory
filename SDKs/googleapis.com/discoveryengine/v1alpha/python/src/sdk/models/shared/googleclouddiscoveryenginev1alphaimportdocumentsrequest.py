import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddiscoveryenginev1alphabigquerysource as shared_googleclouddiscoveryenginev1alphabigquerysource
from ..shared import googleclouddiscoveryenginev1alphaimporterrorconfig as shared_googleclouddiscoveryenginev1alphaimporterrorconfig
from ..shared import googleclouddiscoveryenginev1alphagcssource as shared_googleclouddiscoveryenginev1alphagcssource
from ..shared import googleclouddiscoveryenginev1alphaimportdocumentsrequestinlinesource as shared_googleclouddiscoveryenginev1alphaimportdocumentsrequestinlinesource

class GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestReconciliationModeEnum(str, Enum):
    RECONCILIATION_MODE_UNSPECIFIED = "RECONCILIATION_MODE_UNSPECIFIED"
    INCREMENTAL = "INCREMENTAL"
    FULL = "FULL"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDiscoveryengineV1alphaImportDocumentsRequest:
    r"""GoogleCloudDiscoveryengineV1alphaImportDocumentsRequest
    Request message for Import methods.
    """
    
    bigquery_source: Optional[shared_googleclouddiscoveryenginev1alphabigquerysource.GoogleCloudDiscoveryengineV1alphaBigQuerySource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigquerySource') }})
    error_config: Optional[shared_googleclouddiscoveryenginev1alphaimporterrorconfig.GoogleCloudDiscoveryengineV1alphaImportErrorConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorConfig') }})
    gcs_source: Optional[shared_googleclouddiscoveryenginev1alphagcssource.GoogleCloudDiscoveryengineV1alphaGcsSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsSource') }})
    inline_source: Optional[shared_googleclouddiscoveryenginev1alphaimportdocumentsrequestinlinesource.GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestInlineSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inlineSource') }})
    reconciliation_mode: Optional[GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestReconciliationModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reconciliationMode') }})
    
