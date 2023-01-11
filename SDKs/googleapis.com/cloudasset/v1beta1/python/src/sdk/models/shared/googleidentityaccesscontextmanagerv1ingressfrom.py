import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleidentityaccesscontextmanagerv1ingresssource as shared_googleidentityaccesscontextmanagerv1ingresssource

class GoogleIdentityAccesscontextmanagerV1IngressFromIdentityTypeEnum(str, Enum):
    IDENTITY_TYPE_UNSPECIFIED = "IDENTITY_TYPE_UNSPECIFIED"
    ANY_IDENTITY = "ANY_IDENTITY"
    ANY_USER_ACCOUNT = "ANY_USER_ACCOUNT"
    ANY_SERVICE_ACCOUNT = "ANY_SERVICE_ACCOUNT"


@dataclass_json
@dataclasses.dataclass
class GoogleIdentityAccesscontextmanagerV1IngressFrom:
    r"""GoogleIdentityAccesscontextmanagerV1IngressFrom
    Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the source of the request. The request must satisfy what is defined in `sources` AND identity related fields in order to match.
    """
    
    identities: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identities') }})
    identity_type: Optional[GoogleIdentityAccesscontextmanagerV1IngressFromIdentityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityType') }})
    sources: Optional[list[shared_googleidentityaccesscontextmanagerv1ingresssource.GoogleIdentityAccesscontextmanagerV1IngressSource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    
