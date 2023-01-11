import dataclasses
from typing import Optional
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class ErrorXML:
    r"""ErrorXML
    Error
    """
    
    messages: Optional[list[shared_errormessage.ErrorMessage]] = dataclasses.field(default=None)
    
