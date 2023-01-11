import dataclasses
from typing import Optional
from ..shared import iterationperformance as shared_iterationperformance


@dataclasses.dataclass
class GetIterationPerformancePathParams:
    iteration_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'iterationId', 'style': 'simple', 'explode': False }})
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetIterationPerformanceQueryParams:
    overlap_threshold: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'overlapThreshold', 'style': 'form', 'explode': True }})
    threshold: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'threshold', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetIterationPerformanceHeaders:
    training_key: str = dataclasses.field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetIterationPerformanceRequest:
    headers: GetIterationPerformanceHeaders = dataclasses.field()
    path_params: GetIterationPerformancePathParams = dataclasses.field()
    query_params: GetIterationPerformanceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetIterationPerformanceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    iteration_performance: Optional[shared_iterationperformance.IterationPerformance] = dataclasses.field(default=None)
    
