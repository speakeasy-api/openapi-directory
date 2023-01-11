import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel
from ..shared import tag as shared_tag


@dataclasses.dataclass
class PutThirdPartyTransactionTagPathParams:
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    tag_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TagId', 'style': 'simple', 'explode': False }})
    third_party_transaction_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ThirdPartyTransactionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutThirdPartyTransactionTagHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutThirdPartyTransactionTagRequest:
    headers: PutThirdPartyTransactionTagHeaders = dataclasses.field()
    path_params: PutThirdPartyTransactionTagPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PutThirdPartyTransactionTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    tag: Optional[shared_tag.Tag] = dataclasses.field(default=None)
    
