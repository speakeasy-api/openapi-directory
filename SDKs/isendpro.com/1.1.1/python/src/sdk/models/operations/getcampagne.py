import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import erreur as shared_erreur

class GetCampagneRapportCampagneEnum(str, Enum):
    ONE = "1"


@dataclasses.dataclass
class GetCampagneQueryParams:
    date_deb: str = dataclasses.field(metadata={'query_param': { 'field_name': 'date_deb', 'style': 'form', 'explode': True }})
    date_fin: str = dataclasses.field(metadata={'query_param': { 'field_name': 'date_fin', 'style': 'form', 'explode': True }})
    keyid: str = dataclasses.field(metadata={'query_param': { 'field_name': 'keyid', 'style': 'form', 'explode': True }})
    rapport_campagne: GetCampagneRapportCampagneEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'rapportCampagne', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCampagneRequest:
    query_params: GetCampagneQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCampagneResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    erreur: Optional[shared_erreur.Erreur] = dataclasses.field(default=None)
    get_campagne_200_application_json_binary_string: Optional[bytes] = dataclasses.field(default=None)
    get_campagne_200_file_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
