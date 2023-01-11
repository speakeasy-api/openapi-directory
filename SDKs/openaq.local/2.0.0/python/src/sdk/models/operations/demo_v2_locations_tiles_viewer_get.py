import dataclasses
from typing import Optional


@dataclasses.dataclass
class DemoV2LocationsTilesViewerGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    demo_v2_locations_tiles_viewer_get_200_text_html_string: Optional[str] = dataclasses.field(default=None)
    
