import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudprivatecatalogproducerv1beta1association as shared_googlecloudprivatecatalogproducerv1beta1association


@dataclass_json
@dataclasses.dataclass
class GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest:
    association: Optional[shared_googlecloudprivatecatalogproducerv1beta1association.GoogleCloudPrivatecatalogproducerV1beta1Association] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('association') }})
    
