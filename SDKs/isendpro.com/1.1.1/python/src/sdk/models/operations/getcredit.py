import dataclasses
from typing import Optional
from enum import Enum
from ..shared import creditresponse as shared_creditresponse
from ..shared import erreur as shared_erreur

class GetCreditCreditEnum(str, Enum):
    ONE = "1"
    TWO = "2"


@dataclasses.dataclass
class GetCreditQueryParams:
    credit: GetCreditCreditEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'credit', 'style': 'form', 'explode': True }})
    keyid: str = dataclasses.field(metadata={'query_param': { 'field_name': 'keyid', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCreditRequest:
    query_params: GetCreditQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCreditResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    credit_response: Optional[shared_creditresponse.CreditResponse] = dataclasses.field(default=None)
    erreur: Optional[shared_erreur.Erreur] = dataclasses.field(default=None)
    
