import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrecommendationenginev1beta1importerrorsconfig as shared_googlecloudrecommendationenginev1beta1importerrorsconfig
from ..shared import googlecloudrecommendationenginev1beta1inputconfig as shared_googlecloudrecommendationenginev1beta1inputconfig


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest:
    r"""GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest
    Request message for Import methods.
    """
    
    errors_config: Optional[shared_googlecloudrecommendationenginev1beta1importerrorsconfig.GoogleCloudRecommendationengineV1beta1ImportErrorsConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorsConfig') }})
    input_config: Optional[shared_googlecloudrecommendationenginev1beta1inputconfig.GoogleCloudRecommendationengineV1beta1InputConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfig') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    update_mask: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    
