import dataclasses
from typing import Optional
from ..shared import tilejson as shared_tilejson


@dataclasses.dataclass
class MobilegentilejsonV2LocationsTilesMobileGeneralizedTilesJSONGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tile_json: Optional[shared_tilejson.TileJSON] = dataclasses.field(default=None)
    
