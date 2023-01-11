import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddiscoveryenginev1betabigquerysource as shared_googleclouddiscoveryenginev1betabigquerysource
from ..shared import googleclouddiscoveryenginev1betaimporterrorconfig as shared_googleclouddiscoveryenginev1betaimporterrorconfig
from ..shared import googleclouddiscoveryenginev1betagcssource as shared_googleclouddiscoveryenginev1betagcssource
from ..shared import googleclouddiscoveryenginev1betaimportdocumentsrequestinlinesource as shared_googleclouddiscoveryenginev1betaimportdocumentsrequestinlinesource

class GoogleCloudDiscoveryengineV1betaImportDocumentsRequestReconciliationModeEnum(str, Enum):
    RECONCILIATION_MODE_UNSPECIFIED = "RECONCILIATION_MODE_UNSPECIFIED"
    INCREMENTAL = "INCREMENTAL"
    FULL = "FULL"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDiscoveryengineV1betaImportDocumentsRequest:
    r"""GoogleCloudDiscoveryengineV1betaImportDocumentsRequest
    Request message for Import methods.
    """
    
    bigquery_source: Optional[shared_googleclouddiscoveryenginev1betabigquerysource.GoogleCloudDiscoveryengineV1betaBigQuerySource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigquerySource') }})
    error_config: Optional[shared_googleclouddiscoveryenginev1betaimporterrorconfig.GoogleCloudDiscoveryengineV1betaImportErrorConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorConfig') }})
    gcs_source: Optional[shared_googleclouddiscoveryenginev1betagcssource.GoogleCloudDiscoveryengineV1betaGcsSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsSource') }})
    inline_source: Optional[shared_googleclouddiscoveryenginev1betaimportdocumentsrequestinlinesource.GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inlineSource') }})
    reconciliation_mode: Optional[GoogleCloudDiscoveryengineV1betaImportDocumentsRequestReconciliationModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reconciliationMode') }})
    
