import dataclasses
from ..shared import createcontactinmailinglist as shared_createcontactinmailinglist


@dataclasses.dataclass
class CreateContactInMailinglistPathParams:
    directory_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'DirectoryId', 'style': 'simple', 'explode': False }})
    mailing_list_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'MailingListId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateContactInMailinglistRequest:
    path_params: CreateContactInMailinglistPathParams = dataclasses.field()
    request: shared_createcontactinmailinglist.CreateContactInMailingList = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateContactInMailinglistResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
