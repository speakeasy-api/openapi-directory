import dataclasses
from typing import Optional
from ..shared import apiclassifiersstatusout as shared_apiclassifiersstatusout


@dataclasses.dataclass
class APIStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_classifiers_status_out: Optional[shared_apiclassifiersstatusout.APIClassifiersStatusOut] = dataclasses.field(default=None)
    
