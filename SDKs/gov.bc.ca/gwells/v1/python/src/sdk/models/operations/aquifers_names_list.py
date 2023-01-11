import dataclasses
from typing import Optional
from ..shared import aquiferserializerbasic as shared_aquiferserializerbasic


@dataclasses.dataclass
class AquifersNamesListQueryParams:
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AquifersNamesListRequest:
    query_params: AquifersNamesListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class AquifersNamesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    aquifer_serializer_basics: Optional[list[shared_aquiferserializerbasic.AquiferSerializerBasic]] = dataclasses.field(default=None)
    
