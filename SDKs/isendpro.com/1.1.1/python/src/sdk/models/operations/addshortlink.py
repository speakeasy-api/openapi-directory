import dataclasses
from typing import Optional
from ..shared import shortlinkrequest as shared_shortlinkrequest
from ..shared import erreur as shared_erreur
from ..shared import shortlinkresponse as shared_shortlinkresponse


@dataclasses.dataclass
class AddShortlinkRequest:
    request: shared_shortlinkrequest.ShortlinkRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddShortlinkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    erreur: Optional[shared_erreur.Erreur] = dataclasses.field(default=None)
    shortlink_response: Optional[shared_shortlinkresponse.ShortlinkResponse] = dataclasses.field(default=None)
    
