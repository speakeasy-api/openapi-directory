import dataclasses
from typing import Optional
from enum import Enum
from ..shared import erreur as shared_erreur

class GetListeNoireGetListeNoireEnum(str, Enum):
    ONE = "1"


@dataclasses.dataclass
class GetListeNoireQueryParams:
    get_liste_noire: GetListeNoireGetListeNoireEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'getListeNoire', 'style': 'form', 'explode': True }})
    keyid: str = dataclasses.field(metadata={'query_param': { 'field_name': 'keyid', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetListeNoireRequest:
    query_params: GetListeNoireQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetListeNoireResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    erreur: Optional[shared_erreur.Erreur] = dataclasses.field(default=None)
    get_liste_noire_200_application_json_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
