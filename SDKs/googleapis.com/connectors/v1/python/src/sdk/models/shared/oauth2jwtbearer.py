import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import secret as shared_secret
from ..shared import jwtclaims as shared_jwtclaims


@dataclass_json
@dataclasses.dataclass
class Oauth2JwtBearer:
    r"""Oauth2JwtBearer
    Parameters to support JSON Web Token (JWT) Profile for Oauth 2.0 Authorization Grant based authentication. See https://tools.ietf.org/html/rfc7523 for more details.
    """
    
    client_key: Optional[shared_secret.Secret] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientKey') }})
    jwt_claims: Optional[shared_jwtclaims.JwtClaims] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jwtClaims') }})
    
