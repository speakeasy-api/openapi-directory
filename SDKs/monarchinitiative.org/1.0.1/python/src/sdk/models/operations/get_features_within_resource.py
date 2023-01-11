import dataclasses
from typing import Optional
from ..shared import sequencefeature as shared_sequencefeature


@dataclasses.dataclass
class GetFeaturesWithinResourcePathParams:
    begin: str = dataclasses.field(metadata={'path_param': { 'field_name': 'begin', 'style': 'simple', 'explode': False }})
    build: str = dataclasses.field(metadata={'path_param': { 'field_name': 'build', 'style': 'simple', 'explode': False }})
    end: str = dataclasses.field(metadata={'path_param': { 'field_name': 'end', 'style': 'simple', 'explode': False }})
    reference: str = dataclasses.field(metadata={'path_param': { 'field_name': 'reference', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFeaturesWithinResourceRequest:
    path_params: GetFeaturesWithinResourcePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFeaturesWithinResourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sequence_features: Optional[list[shared_sequencefeature.SequenceFeature]] = dataclasses.field(default=None)
    
