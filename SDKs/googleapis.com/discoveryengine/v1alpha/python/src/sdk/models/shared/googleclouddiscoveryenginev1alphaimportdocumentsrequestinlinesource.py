import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddiscoveryenginev1alphadocument as shared_googleclouddiscoveryenginev1alphadocument


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestInlineSource:
    r"""GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestInlineSource
    The inline source for the input config for ImportDocuments method.
    """
    
    documents: Optional[list[shared_googleclouddiscoveryenginev1alphadocument.GoogleCloudDiscoveryengineV1alphaDocument]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documents') }})
    
