import dataclasses



@dataclasses.dataclass
class DeleteUserAccountsUserAccountIDPathParams:
    user_account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userAccountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteUserAccountsUserAccountIDRequest:
    path_params: DeleteUserAccountsUserAccountIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteUserAccountsUserAccountIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
