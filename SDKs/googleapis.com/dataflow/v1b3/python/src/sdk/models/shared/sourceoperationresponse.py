"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import sourcegetmetadataresponse as shared_sourcegetmetadataresponse
from ..shared import sourcesplitresponse as shared_sourcesplitresponse
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SourceOperationResponse:
    r"""The result of a SourceOperationRequest, specified in ReportWorkItemStatusRequest.source_operation when the work item is completed."""
    
    get_metadata: Optional[shared_sourcegetmetadataresponse.SourceGetMetadataResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('getMetadata'), 'exclude': lambda f: f is None }})
    r"""The result of a SourceGetMetadataOperation."""  
    split: Optional[shared_sourcesplitresponse.SourceSplitResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('split'), 'exclude': lambda f: f is None }})
    r"""The response to a SourceSplitRequest."""  
    