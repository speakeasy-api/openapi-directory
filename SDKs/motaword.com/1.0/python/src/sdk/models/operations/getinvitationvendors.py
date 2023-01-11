import dataclasses
from typing import Optional
from ..shared import fileneedsvendor as shared_fileneedsvendor
from ..shared import error as shared_error
from ..shared import vendorinvitationlist as shared_vendorinvitationlist


@dataclasses.dataclass
class GetInvitationVendorsRequest:
    request: Optional[list[shared_fileneedsvendor.FileNeedsVendor]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetInvitationVendorsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    vendor_invitation_list: Optional[shared_vendorinvitationlist.VendorInvitationList] = dataclasses.field(default=None)
    
