import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aggregate as shared_aggregate


@dataclasses.dataclass
class IpamAggregatesListQueryParams:
    created: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'created', 'style': 'form', 'explode': True }})
    created_gte: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'created__gte', 'style': 'form', 'explode': True }})
    created_lte: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'created__lte', 'style': 'form', 'explode': True }})
    date_added: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_added', 'style': 'form', 'explode': True }})
    date_added_gt: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_added__gt', 'style': 'form', 'explode': True }})
    date_added_gte: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_added__gte', 'style': 'form', 'explode': True }})
    date_added_lt: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_added__lt', 'style': 'form', 'explode': True }})
    date_added_lte: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_added__lte', 'style': 'form', 'explode': True }})
    date_added_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_added__n', 'style': 'form', 'explode': True }})
    family: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'family', 'style': 'form', 'explode': True }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    id_gt: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__gt', 'style': 'form', 'explode': True }})
    id_gte: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__gte', 'style': 'form', 'explode': True }})
    id_lt: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__lt', 'style': 'form', 'explode': True }})
    id_lte: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__lte', 'style': 'form', 'explode': True }})
    id_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__n', 'style': 'form', 'explode': True }})
    last_updated: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'last_updated', 'style': 'form', 'explode': True }})
    last_updated_gte: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'last_updated__gte', 'style': 'form', 'explode': True }})
    last_updated_lte: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'last_updated__lte', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    prefix: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prefix', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    rir: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rir', 'style': 'form', 'explode': True }})
    rir_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rir__n', 'style': 'form', 'explode': True }})
    rir_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rir_id', 'style': 'form', 'explode': True }})
    rir_id_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rir_id__n', 'style': 'form', 'explode': True }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    tag_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tag__n', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class IpamAggregatesList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_aggregate.Aggregate] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class IpamAggregatesListRequest:
    query_params: IpamAggregatesListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class IpamAggregatesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ipam_aggregates_list_200_application_json_object: Optional[IpamAggregatesList200ApplicationJSON] = dataclasses.field(default=None)
    
