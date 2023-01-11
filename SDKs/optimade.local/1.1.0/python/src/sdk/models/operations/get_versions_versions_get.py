import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetVersionsVersionsGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_versions_versions_get_200_text_csv_string: Optional[str] = dataclasses.field(default=None)
    
