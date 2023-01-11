import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class FavicoFaviconIcoGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    favico_favicon_ico_get_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
