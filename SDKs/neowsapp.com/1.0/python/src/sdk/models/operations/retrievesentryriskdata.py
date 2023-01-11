import dataclasses
from typing import Optional
from ..shared import sentryobjectpagingdto as shared_sentryobjectpagingdto


@dataclasses.dataclass
class RetrieveSentryRiskDataQueryParams:
    is_active: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'is_active', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RetrieveSentryRiskDataRequest:
    query_params: RetrieveSentryRiskDataQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class RetrieveSentryRiskDataResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sentry_object_paging_dto: Optional[shared_sentryobjectpagingdto.SentryObjectPagingDto] = dataclasses.field(default=None)
    
