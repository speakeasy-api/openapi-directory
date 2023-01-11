import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import graph as shared_graph
from ..shared import graph as shared_graph


@dataclasses.dataclass
class ExtrasGraphsUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExtrasGraphsUpdateRequest:
    path_params: ExtrasGraphsUpdatePathParams = dataclasses.field()
    request: shared_graph.GraphInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ExtrasGraphsUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    graph: Optional[shared_graph.Graph] = dataclasses.field(default=None)
    
