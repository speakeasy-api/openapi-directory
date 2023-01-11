import dataclasses
from typing import Optional
from ..shared import repertoiremodifrequest as shared_repertoiremodifrequest
from ..shared import erreur as shared_erreur
from ..shared import repertoiremodifreponse as shared_repertoiremodifreponse


@dataclasses.dataclass
class RepertoireRequest:
    request: shared_repertoiremodifrequest.RepertoirEmodifrequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RepertoireResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    erreur: Optional[shared_erreur.Erreur] = dataclasses.field(default=None)
    repertoir_emodifreponse: Optional[shared_repertoiremodifreponse.RepertoirEmodifreponse] = dataclasses.field(default=None)
    
