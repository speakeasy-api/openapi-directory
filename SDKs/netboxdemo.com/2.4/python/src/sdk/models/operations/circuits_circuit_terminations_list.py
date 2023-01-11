import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import circuittermination as shared_circuittermination


@dataclasses.dataclass
class CircuitsCircuitTerminationsListQueryParams:
    circuit_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'circuit_id', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    port_speed: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'port_speed', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    site: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    site_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'site_id', 'style': 'form', 'explode': True }})
    term_side: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'term_side', 'style': 'form', 'explode': True }})
    upstream_speed: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upstream_speed', 'style': 'form', 'explode': True }})
    xconnect_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'xconnect_id', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class CircuitsCircuitTerminationsList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_circuittermination.CircuitTermination] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class CircuitsCircuitTerminationsListRequest:
    query_params: CircuitsCircuitTerminationsListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CircuitsCircuitTerminationsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    circuits_circuit_terminations_list_200_application_json_object: Optional[CircuitsCircuitTerminationsList200ApplicationJSON] = dataclasses.field(default=None)
    
