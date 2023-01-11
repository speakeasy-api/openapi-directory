import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import errorresponseschema as shared_errorresponseschema


@dataclasses.dataclass
class DownloadUsageHistoryPathParams:
    key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DownloadUsageHistoryQueryParams:
    end: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    licensee: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'licensee', 'style': 'form', 'explode': True }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DownloadUsageHistorySecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    user_token: shared_security.SchemeUserToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class DownloadUsageHistoryRequest:
    path_params: DownloadUsageHistoryPathParams = dataclasses.field()
    query_params: DownloadUsageHistoryQueryParams = dataclasses.field()
    security: DownloadUsageHistorySecurity = dataclasses.field()
    

@dataclasses.dataclass
class DownloadUsageHistoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    download_usage_history_200_text_csv_string: Optional[str] = dataclasses.field(default=None)
    error_response_schema: Optional[shared_errorresponseschema.ErrorResponseSchema] = dataclasses.field(default=None)
    
