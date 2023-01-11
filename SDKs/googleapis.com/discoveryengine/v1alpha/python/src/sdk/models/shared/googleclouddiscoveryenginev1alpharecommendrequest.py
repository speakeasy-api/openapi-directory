import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddiscoveryenginev1alphauserevent as shared_googleclouddiscoveryenginev1alphauserevent


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDiscoveryengineV1alphaRecommendRequest:
    r"""GoogleCloudDiscoveryengineV1alphaRecommendRequest
    Request message for Recommend method.
    """
    
    filter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    params: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('params') }})
    user_event: Optional[shared_googleclouddiscoveryenginev1alphauserevent.GoogleCloudDiscoveryengineV1alphaUserEvent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userEvent') }})
    user_labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLabels') }})
    validate_only: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validateOnly') }})
    
