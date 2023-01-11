import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import iteration as shared_iteration
from ..shared import iteration as shared_iteration


@dataclasses.dataclass
class UpdateIterationPathParams:
    iteration_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'iterationId', 'style': 'simple', 'explode': False }})
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateIterationHeaders:
    training_key: str = dataclasses.field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateIterationRequestsInput:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'text/xml' }})
    iteration: Optional[shared_iteration.IterationInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    iteration1: Optional[shared_iteration.IterationInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    iteration2: Optional[shared_iteration.IterationInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class UpdateIterationRequest:
    headers: UpdateIterationHeaders = dataclasses.field()
    path_params: UpdateIterationPathParams = dataclasses.field()
    request: UpdateIterationRequestsInput = dataclasses.field()
    

@dataclasses.dataclass
class UpdateIterationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    iteration: Optional[shared_iteration.Iteration] = dataclasses.field(default=None)
    
