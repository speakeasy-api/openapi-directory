import dataclasses
from typing import Optional
from ..shared import level as shared_level
from ..shared import segment as shared_segment


@dataclasses.dataclass
class Classification:
    r"""Classification
    Classification
    """
    
    genre: Optional[shared_level.Level] = dataclasses.field(default=None)
    primary: Optional[bool] = dataclasses.field(default=None)
    segment: Optional[shared_segment.Segment] = dataclasses.field(default=None)
    sub_genre: Optional[shared_level.Level] = dataclasses.field(default=None)
    sub_type: Optional[shared_level.Level] = dataclasses.field(default=None)
    type: Optional[shared_level.Level] = dataclasses.field(default=None)
    
