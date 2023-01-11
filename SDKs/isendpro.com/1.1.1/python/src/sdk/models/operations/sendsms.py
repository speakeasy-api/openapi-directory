import dataclasses
from typing import Optional
from ..shared import smsuniquerequest as shared_smsuniquerequest
from ..shared import erreur as shared_erreur
from ..shared import smsreponse as shared_smsreponse


@dataclasses.dataclass
class SendSmsRequest:
    request: shared_smsuniquerequest.SmsUniqueRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SendSmsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    erreur: Optional[shared_erreur.Erreur] = dataclasses.field(default=None)
    sms_reponse: Optional[shared_smsreponse.SmsReponse] = dataclasses.field(default=None)
    
