import dataclasses



@dataclasses.dataclass
class OrgsCheckMembershipForUserPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OrgsCheckMembershipForUserRequest:
    path_params: OrgsCheckMembershipForUserPathParams = dataclasses.field()
    

@dataclasses.dataclass
class OrgsCheckMembershipForUserResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    
