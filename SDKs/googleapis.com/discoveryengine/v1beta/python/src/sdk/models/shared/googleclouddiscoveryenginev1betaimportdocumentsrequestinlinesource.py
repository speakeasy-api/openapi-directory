import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddiscoveryenginev1betadocument as shared_googleclouddiscoveryenginev1betadocument


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource:
    r"""GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource
    The inline source for the input config for ImportDocuments method.
    """
    
    documents: Optional[list[shared_googleclouddiscoveryenginev1betadocument.GoogleCloudDiscoveryengineV1betaDocument]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documents') }})
    
