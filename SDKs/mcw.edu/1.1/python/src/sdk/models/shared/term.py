import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import termxref as shared_termxref


@dataclasses.dataclass
class Term:
    acc_id: Optional[str] = dataclasses.field(default=None)
    comment: Optional[str] = dataclasses.field(default=None)
    created_by: Optional[str] = dataclasses.field(default=None)
    creation_date: Optional[datetime] = dataclasses.field(default=None)
    definition: Optional[str] = dataclasses.field(default=None)
    modification_date: Optional[datetime] = dataclasses.field(default=None)
    obsolete: Optional[int] = dataclasses.field(default=None)
    ontology_id: Optional[str] = dataclasses.field(default=None)
    term: Optional[str] = dataclasses.field(default=None)
    xrefs: Optional[list[shared_termxref.TermXRef]] = dataclasses.field(default=None)
    
