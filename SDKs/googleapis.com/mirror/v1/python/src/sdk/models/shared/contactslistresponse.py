import dataclasses
from typing import Optional
from ..shared import contact as shared_contact


@dataclasses.dataclass
class ContactsListResponse:
    r"""ContactsListResponse
    A list of Contacts representing contacts. This is the response from the server to GET requests on the contacts collection.
    """
    
    items: Optional[list[shared_contact.Contact]] = dataclasses.field(default=None)
    kind: Optional[str] = dataclasses.field(default=None)
    
