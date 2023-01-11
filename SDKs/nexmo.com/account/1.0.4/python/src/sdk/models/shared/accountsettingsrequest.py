import dataclasses
from typing import Optional


@dataclasses.dataclass
class AccountSettingsRequest:
    dr_call_back_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'drCallBackUrl' }})
    mo_call_back_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'moCallBackUrl' }})
    
