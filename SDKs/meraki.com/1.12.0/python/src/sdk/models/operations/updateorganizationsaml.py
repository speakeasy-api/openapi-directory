import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateOrganizationSamlPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateOrganizationSamlRequestBody:
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    

@dataclasses.dataclass
class UpdateOrganizationSamlRequest:
    path_params: UpdateOrganizationSamlPathParams = dataclasses.field()
    request: Optional[UpdateOrganizationSamlRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateOrganizationSamlResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_organization_saml_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
