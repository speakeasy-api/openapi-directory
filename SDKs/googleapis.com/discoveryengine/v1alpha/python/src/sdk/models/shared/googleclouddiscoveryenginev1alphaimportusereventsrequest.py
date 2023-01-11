import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddiscoveryenginev1alphabigquerysource as shared_googleclouddiscoveryenginev1alphabigquerysource
from ..shared import googleclouddiscoveryenginev1alphaimporterrorconfig as shared_googleclouddiscoveryenginev1alphaimporterrorconfig
from ..shared import googleclouddiscoveryenginev1alphagcssource as shared_googleclouddiscoveryenginev1alphagcssource
from ..shared import googleclouddiscoveryenginev1alphaimportusereventsrequestinlinesource as shared_googleclouddiscoveryenginev1alphaimportusereventsrequestinlinesource


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDiscoveryengineV1alphaImportUserEventsRequest:
    r"""GoogleCloudDiscoveryengineV1alphaImportUserEventsRequest
    Request message for the ImportUserEvents request.
    """
    
    bigquery_source: Optional[shared_googleclouddiscoveryenginev1alphabigquerysource.GoogleCloudDiscoveryengineV1alphaBigQuerySource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigquerySource') }})
    error_config: Optional[shared_googleclouddiscoveryenginev1alphaimporterrorconfig.GoogleCloudDiscoveryengineV1alphaImportErrorConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorConfig') }})
    gcs_source: Optional[shared_googleclouddiscoveryenginev1alphagcssource.GoogleCloudDiscoveryengineV1alphaGcsSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsSource') }})
    inline_source: Optional[shared_googleclouddiscoveryenginev1alphaimportusereventsrequestinlinesource.GoogleCloudDiscoveryengineV1alphaImportUserEventsRequestInlineSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inlineSource') }})
    
