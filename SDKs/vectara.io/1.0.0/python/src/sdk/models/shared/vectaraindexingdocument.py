"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import indexingsection as shared_indexingsection
from ..shared import vectaraindexingcustomdimension as shared_vectaraindexingcustomdimension
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class VectaraindexingDocument:
    r"""A document to index."""
    
    custom_dims: Optional[list[shared_vectaraindexingcustomdimension.VectaraindexingCustomDimension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('customDims'), 'exclude': lambda f: f is None }})
    r"""A list of custom dimension values that are included in the generated
    representation of all sections.
    """  
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('description'), 'exclude': lambda f: f is None }})
    r"""An optional description for the document."""  
    document_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('documentId'), 'exclude': lambda f: f is None }})
    r"""Client assigned document ID to this document."""  
    metadata_json: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('metadataJson'), 'exclude': lambda f: f is None }})
    r"""Metadata about the document. This should be a json string, and it can be
    retrieved at query time.
    """  
    section: Optional[list[shared_indexingsection.IndexingSection]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('section'), 'exclude': lambda f: f is None }})
    r"""The actual content of the document, structured as a repeating list
    of sections.
    """  
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('title'), 'exclude': lambda f: f is None }})
    r"""The title of the document."""  
    