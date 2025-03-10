"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import classificationmodeloptions as shared_classificationmodeloptions
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Features:
    r"""All available features for sentiment, syntax, and semantic analysis. Setting each one to true will enable that specific analysis for the input."""
    
    classification_model_options: Optional[shared_classificationmodeloptions.ClassificationModelOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('classificationModelOptions'), 'exclude': lambda f: f is None }})
    r"""Model options available for classification requests."""  
    classify_text: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('classifyText'), 'exclude': lambda f: f is None }})
    r"""Classify the full document into categories."""  
    extract_document_sentiment: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('extractDocumentSentiment'), 'exclude': lambda f: f is None }})
    r"""Extract document-level sentiment."""  
    extract_entities: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('extractEntities'), 'exclude': lambda f: f is None }})
    r"""Extract entities."""  
    extract_entity_sentiment: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('extractEntitySentiment'), 'exclude': lambda f: f is None }})
    r"""Extract entities and their associated sentiment."""  
    extract_syntax: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('extractSyntax'), 'exclude': lambda f: f is None }})
    r"""Extract syntax information."""  
    