import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import proposal as shared_proposal

class AdexchangebuyerProposalsPatchUpdateActionEnum(str, Enum):
    ACCEPT = "accept"
    CANCEL = "cancel"
    PROPOSE = "propose"
    PROPOSE_AND_ACCEPT = "proposeAndAccept"
    UNKNOWN_ACTION = "unknownAction"
    UPDATE_NON_TERMS = "updateNonTerms"


@dataclasses.dataclass
class AdexchangebuyerProposalsPatchPathParams:
    proposal_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'proposalId', 'style': 'simple', 'explode': False }})
    revision_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'revisionNumber', 'style': 'simple', 'explode': False }})
    update_action: AdexchangebuyerProposalsPatchUpdateActionEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'updateAction', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AdexchangebuyerProposalsPatchQueryParams:
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AdexchangebuyerProposalsPatchSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AdexchangebuyerProposalsPatchRequest:
    path_params: AdexchangebuyerProposalsPatchPathParams = dataclasses.field()
    query_params: AdexchangebuyerProposalsPatchQueryParams = dataclasses.field()
    security: AdexchangebuyerProposalsPatchSecurity = dataclasses.field()
    request: Optional[shared_proposal.Proposal] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AdexchangebuyerProposalsPatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    proposal: Optional[shared_proposal.Proposal] = dataclasses.field(default=None)
    
