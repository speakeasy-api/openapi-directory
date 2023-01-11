import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import confirmationoffunds as shared_confirmationoffunds
from ..shared import error400_ais as shared_error400_ais
from ..shared import error400_ng_ais as shared_error400_ng_ais
from ..shared import error401_ng_piis as shared_error401_ng_piis
from ..shared import error401_piis as shared_error401_piis
from ..shared import error403_ng_piis as shared_error403_ng_piis
from ..shared import error403_piis as shared_error403_piis
from ..shared import error404_ng_piis as shared_error404_ng_piis
from ..shared import error404_piis as shared_error404_piis
from ..shared import error405_ng_piis as shared_error405_ng_piis
from ..shared import error405_piis as shared_error405_piis
from ..shared import error409_ng_piis as shared_error409_ng_piis
from ..shared import error409_piis as shared_error409_piis


@dataclasses.dataclass
class CheckAvailabilityOfFundsHeaders:
    x_request_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Request-ID', 'style': 'simple', 'explode': False }})
    authorization: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    digest: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Digest', 'style': 'simple', 'explode': False }})
    signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Signature', 'style': 'simple', 'explode': False }})
    tpp_signature_certificate: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'TPP-Signature-Certificate', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CheckAvailabilityOfFundsSecurity:
    bearer_auth_o_auth: Optional[shared_security.SchemeBearerAuthOAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclasses.dataclass
class CheckAvailabilityOfFunds200ApplicationJSON:
    r"""CheckAvailabilityOfFunds200ApplicationJSON
    Equals \"true\" if sufficient funds are available at the time of the request,
    \"false\" otherwise.
    
    """
    
    funds_available: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fundsAvailable') }})
    

@dataclasses.dataclass
class CheckAvailabilityOfFundsRequest:
    headers: CheckAvailabilityOfFundsHeaders = dataclasses.field()
    request: shared_confirmationoffunds.ConfirmationOfFunds = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CheckAvailabilityOfFundsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CheckAvailabilityOfFundsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    error400_ais: Optional[shared_error400_ais.Error400Ais] = dataclasses.field(default=None)
    error400_ng_ais: Optional[shared_error400_ng_ais.Error400NgAis] = dataclasses.field(default=None)
    error401_ng_piis: Optional[shared_error401_ng_piis.Error401NgPiis] = dataclasses.field(default=None)
    error401_piis: Optional[shared_error401_piis.Error401Piis] = dataclasses.field(default=None)
    error403_ng_piis: Optional[shared_error403_ng_piis.Error403NgPiis] = dataclasses.field(default=None)
    error403_piis: Optional[shared_error403_piis.Error403Piis] = dataclasses.field(default=None)
    error404_ng_piis: Optional[shared_error404_ng_piis.Error404NgPiis] = dataclasses.field(default=None)
    error404_piis: Optional[shared_error404_piis.Error404Piis] = dataclasses.field(default=None)
    error405_ng_piis: Optional[shared_error405_ng_piis.Error405NgPiis] = dataclasses.field(default=None)
    error405_piis: Optional[shared_error405_piis.Error405Piis] = dataclasses.field(default=None)
    error409_ng_piis: Optional[shared_error409_ng_piis.Error409NgPiis] = dataclasses.field(default=None)
    error409_piis: Optional[shared_error409_piis.Error409Piis] = dataclasses.field(default=None)
    check_availability_of_funds_200_application_json_object: Optional[CheckAvailabilityOfFunds200ApplicationJSON] = dataclasses.field(default=None)
    
