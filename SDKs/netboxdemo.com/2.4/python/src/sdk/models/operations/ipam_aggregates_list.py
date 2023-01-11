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
    date_added: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_added', 'style': 'form', 'explode': True }})
    family: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'family', 'style': 'form', 'explode': True }})
    id_in: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__in', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    rir: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rir', 'style': 'form', 'explode': True }})
    rir_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rir_id', 'style': 'form', 'explode': True }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    

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
    
