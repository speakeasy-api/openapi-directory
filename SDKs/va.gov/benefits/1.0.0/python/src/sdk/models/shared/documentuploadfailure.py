import dataclasses
from typing import Optional


@dataclasses.dataclass
class DocumentUploadFailure:
    r"""DocumentUploadFailure
    Document upload failed
    """
    
    code: Optional[str] = dataclasses.field(default=None)
    message: Optional[str] = dataclasses.field(default=None)
    
