import dataclasses



@dataclasses.dataclass
class OrgsRemovePublicMembershipForAuthenticatedUserPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OrgsRemovePublicMembershipForAuthenticatedUserRequest:
    path_params: OrgsRemovePublicMembershipForAuthenticatedUserPathParams = dataclasses.field()
    

@dataclasses.dataclass
class OrgsRemovePublicMembershipForAuthenticatedUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
