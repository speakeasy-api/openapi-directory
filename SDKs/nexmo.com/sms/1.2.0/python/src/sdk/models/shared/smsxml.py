import dataclasses
from typing import Optional
from ..shared import message as shared_message


@dataclasses.dataclass
class SmsXML:
    r"""SmsXML
    Message sent
    """
    
    messages: Optional[list[shared_message.Message]] = dataclasses.field(default=None)
    
