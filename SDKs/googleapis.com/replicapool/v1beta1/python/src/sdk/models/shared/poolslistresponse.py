import dataclasses
from typing import Optional
from ..shared import pool as shared_pool


@dataclasses.dataclass
class PoolsListResponse:
    next_page_token: Optional[str] = dataclasses.field(default=None)
    resources: Optional[list[shared_pool.Pool]] = dataclasses.field(default=None)
    
