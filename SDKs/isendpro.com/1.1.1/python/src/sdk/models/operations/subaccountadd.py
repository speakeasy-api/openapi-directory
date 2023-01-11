import dataclasses
from typing import Optional
from ..shared import subaccountaddrequest as shared_subaccountaddrequest
from ..shared import erreur as shared_erreur
from ..shared import subaccountaddresponse as shared_subaccountaddresponse


@dataclasses.dataclass
class SubaccountAddRequest:
    request: shared_subaccountaddrequest.SubaccountAddRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SubaccountAddResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    erreur: Optional[shared_erreur.Erreur] = dataclasses.field(default=None)
    subaccount_add_response: Optional[shared_subaccountaddresponse.SubaccountAddResponse] = dataclasses.field(default=None)
    
