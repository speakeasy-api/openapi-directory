import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import sourceaccounttype_enum as shared_sourceaccounttype_enum
from ..shared import listsourceaccountresponsev3 as shared_listsourceaccountresponsev3


@dataclasses.dataclass
class GetSourceAccountsV3QueryParams:
    funding_account_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fundingAccountId', 'style': 'form', 'explode': True }})
    include_user_deleted: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeUserDeleted', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    payor_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'payorId', 'style': 'form', 'explode': True }})
    physical_account_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'physicalAccountId', 'style': 'form', 'explode': True }})
    physical_account_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'physicalAccountName', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    type: Optional[shared_sourceaccounttype_enum.SourceAccountTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSourceAccountsV3Request:
    query_params: GetSourceAccountsV3QueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSourceAccountsV3Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_source_account_response_v3: Optional[shared_listsourceaccountresponsev3.ListSourceAccountResponseV3] = dataclasses.field(default=None)
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
