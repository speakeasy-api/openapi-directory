import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import datasetlist as shared_datasetlist


@dataclasses.dataclass
class ListDatasetsQueryParams:
    count: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    global_: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'global', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListDatasetsSecurity:
    bearer_token: shared_security.SchemeBearerToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class ListDatasetsRequest:
    query_params: ListDatasetsQueryParams = dataclasses.field()
    security: ListDatasetsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListDatasetsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dataset_list: Optional[shared_datasetlist.DatasetList] = dataclasses.field(default=None)
    
