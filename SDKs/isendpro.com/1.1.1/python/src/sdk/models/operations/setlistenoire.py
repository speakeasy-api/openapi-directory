import dataclasses
from typing import Optional
from enum import Enum
from ..shared import erreur as shared_erreur
from ..shared import listenoirereponse as shared_listenoirereponse

class SetListeNoireSetlisteNoireEnum(str, Enum):
    ONE = "1"


@dataclasses.dataclass
class SetListeNoireQueryParams:
    keyid: str = dataclasses.field(metadata={'query_param': { 'field_name': 'keyid', 'style': 'form', 'explode': True }})
    num: str = dataclasses.field(metadata={'query_param': { 'field_name': 'num', 'style': 'form', 'explode': True }})
    setliste_noire: SetListeNoireSetlisteNoireEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'setlisteNoire', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SetListeNoireRequest:
    query_params: SetListeNoireQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SetListeNoireResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    erreur: Optional[shared_erreur.Erreur] = dataclasses.field(default=None)
    listenoire_reponse: Optional[shared_listenoirereponse.ListenoireReponse] = dataclasses.field(default=None)
    
