import dataclasses
from typing import Optional
from ..shared import smsrequest as shared_smsrequest
from ..shared import erreur as shared_erreur
from ..shared import smsreponse as shared_smsreponse


@dataclasses.dataclass
class SendSmsMultiRequest:
    request: shared_smsrequest.SmsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SendSmsMultiResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    erreur: Optional[shared_erreur.Erreur] = dataclasses.field(default=None)
    sms_reponse: Optional[shared_smsreponse.SmsReponse] = dataclasses.field(default=None)
    
