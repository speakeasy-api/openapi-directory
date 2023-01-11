import dataclasses
from typing import Optional
from enum import Enum
from ..shared import erreur as shared_erreur
from ..shared import listenoirereponse as shared_listenoirereponse

class DelListeNoireDelListeNoireEnum(str, Enum):
    ONE = "1"


@dataclasses.dataclass
class DelListeNoireQueryParams:
    del_liste_noire: DelListeNoireDelListeNoireEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'delListeNoire', 'style': 'form', 'explode': True }})
    keyid: str = dataclasses.field(metadata={'query_param': { 'field_name': 'keyid', 'style': 'form', 'explode': True }})
    num: str = dataclasses.field(metadata={'query_param': { 'field_name': 'num', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DelListeNoireRequest:
    query_params: DelListeNoireQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DelListeNoireResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    erreur: Optional[shared_erreur.Erreur] = dataclasses.field(default=None)
    listenoire_reponse: Optional[shared_listenoirereponse.ListenoireReponse] = dataclasses.field(default=None)
    
