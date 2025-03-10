"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import sentence as shared_sentence
from ..shared import token as shared_token
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class AnalyzeSyntaxResponse:
    r"""The syntax analysis response message."""
    
    language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('language'), 'exclude': lambda f: f is None }})
    r"""The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details."""  
    sentences: Optional[list[shared_sentence.Sentence]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('sentences'), 'exclude': lambda f: f is None }})
    r"""Sentences in the input document."""  
    tokens: Optional[list[shared_token.Token]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('tokens'), 'exclude': lambda f: f is None }})
    r"""Tokens, along with their syntactic information, in the input document."""  
    