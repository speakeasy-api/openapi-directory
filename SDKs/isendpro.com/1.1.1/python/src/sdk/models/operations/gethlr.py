import dataclasses
from typing import Optional
from ..shared import hlrrequest as shared_hlrrequest
from ..shared import erreur as shared_erreur
from ..shared import hlrreponse as shared_hlrreponse


@dataclasses.dataclass
class GetHlrRequest:
    request: shared_hlrrequest.HlRrequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetHlrResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    erreur: Optional[shared_erreur.Erreur] = dataclasses.field(default=None)
    hlr_reponse: Optional[shared_hlrreponse.HlrReponse] = dataclasses.field(default=None)
    
