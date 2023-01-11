import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSmUsersPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSmUsersQueryParams:
    emails: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'emails', 'style': 'form', 'explode': False }})
    ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': False }})
    scope: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'scope', 'style': 'form', 'explode': False }})
    usernames: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'usernames', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSmUsersRequest:
    path_params: GetNetworkSmUsersPathParams = dataclasses.field()
    query_params: GetNetworkSmUsersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSmUsersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_sm_users_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
