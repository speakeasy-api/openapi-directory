import dataclasses
from typing import Optional
from ..shared import comptagerequest as shared_comptagerequest
from ..shared import comptagereponse as shared_comptagereponse
from ..shared import erreur as shared_erreur


@dataclasses.dataclass
class ComptageRequest:
    request: shared_comptagerequest.ComptageRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ComptageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    comptage_reponse: Optional[shared_comptagereponse.ComptageReponse] = dataclasses.field(default=None)
    erreur: Optional[shared_erreur.Erreur] = dataclasses.field(default=None)
    
