import dataclasses
from typing import Optional
from ..shared import repertoirecreaterequest as shared_repertoirecreaterequest
from ..shared import erreur as shared_erreur
from ..shared import repertoirecreatereponse as shared_repertoirecreatereponse


@dataclasses.dataclass
class RepertoireCreaRequest:
    request: shared_repertoirecreaterequest.RepertoirEcreaterequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RepertoireCreaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    erreur: Optional[shared_erreur.Erreur] = dataclasses.field(default=None)
    repertoir_ecreatereponse: Optional[shared_repertoirecreatereponse.RepertoirEcreatereponse] = dataclasses.field(default=None)
    
