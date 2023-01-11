import dataclasses
from typing import Optional
from ..shared import subaccountrequest as shared_subaccountrequest
from ..shared import erreur as shared_erreur
from ..shared import subaccountresponse as shared_subaccountresponse


@dataclasses.dataclass
class SubaccountEditRequest:
    request: shared_subaccountrequest.SubaccountRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SubaccountEditResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    erreur: Optional[shared_erreur.Erreur] = dataclasses.field(default=None)
    subaccount_response: Optional[shared_subaccountresponse.SubaccountResponse] = dataclasses.field(default=None)
    
