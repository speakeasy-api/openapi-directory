import dataclasses



@dataclasses.dataclass
class DeleteBankAccountPathParams:
    application_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'application_id', 'style': 'simple', 'explode': False }})
    bank_account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'bank_account_id', 'style': 'simple', 'explode': False }})
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteBankAccountRequest:
    path_params: DeleteBankAccountPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteBankAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
