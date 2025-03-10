"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import servingattribute as shared_servingattribute
from ..shared import servingcorpuskey as shared_servingcorpuskey
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ServingResponse:
    
    corpus_key: Optional[shared_servingcorpuskey.ServingCorpusKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('corpusKey'), 'exclude': lambda f: f is None }})  
    document_index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('documentIndex'), 'exclude': lambda f: f is None }})
    r"""Use this ID to find the document in the ResponseSet."""  
    metadata: Optional[list[shared_servingattribute.ServingAttribute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('metadata'), 'exclude': lambda f: f is None }})  
    score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('score'), 'exclude': lambda f: f is None }})
    r"""The score used for ranking results.  The higher the score, the better the match."""  
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('text'), 'exclude': lambda f: f is None }})  
    