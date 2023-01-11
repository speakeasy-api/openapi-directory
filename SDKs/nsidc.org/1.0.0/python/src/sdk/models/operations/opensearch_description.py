import dataclasses
from typing import Optional


@dataclasses.dataclass
class OpensearchDescriptionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    opensearch_description_200_application_opensearchdescription_plus_xml_string: Optional[str] = dataclasses.field(default=None)
    
