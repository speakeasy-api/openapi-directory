import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import updatetransactiontagsrequest as shared_updatetransactiontagsrequest


@dataclasses.dataclass
class PostTransactionsTransactionIDRelationshipsTagsPathParams:
    transaction_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'transactionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostTransactionsTransactionIDRelationshipsTagsRequest:
    path_params: PostTransactionsTransactionIDRelationshipsTagsPathParams = dataclasses.field()
    request: Optional[shared_updatetransactiontagsrequest.UpdateTransactionTagsRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostTransactionsTransactionIDRelationshipsTagsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
