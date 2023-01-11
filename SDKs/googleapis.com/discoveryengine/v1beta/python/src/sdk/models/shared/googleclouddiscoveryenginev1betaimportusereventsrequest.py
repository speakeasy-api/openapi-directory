import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddiscoveryenginev1betabigquerysource as shared_googleclouddiscoveryenginev1betabigquerysource
from ..shared import googleclouddiscoveryenginev1betaimporterrorconfig as shared_googleclouddiscoveryenginev1betaimporterrorconfig
from ..shared import googleclouddiscoveryenginev1betagcssource as shared_googleclouddiscoveryenginev1betagcssource
from ..shared import googleclouddiscoveryenginev1betaimportusereventsrequestinlinesource as shared_googleclouddiscoveryenginev1betaimportusereventsrequestinlinesource


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDiscoveryengineV1betaImportUserEventsRequest:
    r"""GoogleCloudDiscoveryengineV1betaImportUserEventsRequest
    Request message for the ImportUserEvents request.
    """
    
    bigquery_source: Optional[shared_googleclouddiscoveryenginev1betabigquerysource.GoogleCloudDiscoveryengineV1betaBigQuerySource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigquerySource') }})
    error_config: Optional[shared_googleclouddiscoveryenginev1betaimporterrorconfig.GoogleCloudDiscoveryengineV1betaImportErrorConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorConfig') }})
    gcs_source: Optional[shared_googleclouddiscoveryenginev1betagcssource.GoogleCloudDiscoveryengineV1betaGcsSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsSource') }})
    inline_source: Optional[shared_googleclouddiscoveryenginev1betaimportusereventsrequestinlinesource.GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inlineSource') }})
    
