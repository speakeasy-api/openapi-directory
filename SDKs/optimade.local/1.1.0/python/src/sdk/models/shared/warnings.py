import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class WarningsErrorLinks:
    r"""WarningsErrorLinks
    A Links object specific to Error objects
    """
    
    about: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('about') }})
    

@dataclass_json
@dataclasses.dataclass
class WarningsErrorSource:
    r"""WarningsErrorSource
    an object containing references to the source of the error
    """
    
    parameter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameter') }})
    pointer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pointer') }})
    

@dataclass_json
@dataclasses.dataclass
class Warnings:
    r"""Warnings
    OPTIMADE-specific warning class based on OPTIMADE-specific JSON API Error.
    
    From the specification:
    
    A warning resource object is defined similarly to a JSON API error object, but MUST also include the field type, which MUST have the value \"warning\".
    The field detail MUST be present and SHOULD contain a non-critical message, e.g., reporting unrecognized search attributes or deprecated features.
    
    Note: Must be named \"Warnings\", since \"Warning\" is a built-in Python class.
    """
    
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    links: Optional[WarningsErrorLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    meta: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    source: Optional[WarningsErrorSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
