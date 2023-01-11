import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class Reference:
    citation: Optional[str] = dataclasses.field(default=None)
    doi: Optional[str] = dataclasses.field(default=None)
    editors: Optional[str] = dataclasses.field(default=None)
    issue: Optional[str] = dataclasses.field(default=None)
    key: Optional[int] = dataclasses.field(default=None)
    notes: Optional[str] = dataclasses.field(default=None)
    pages: Optional[str] = dataclasses.field(default=None)
    pub_date: Optional[datetime] = dataclasses.field(default=None)
    pub_status: Optional[str] = dataclasses.field(default=None)
    publication: Optional[str] = dataclasses.field(default=None)
    publisher: Optional[str] = dataclasses.field(default=None)
    publisher_city: Optional[str] = dataclasses.field(default=None)
    ref_abstract: Optional[str] = dataclasses.field(default=None)
    reference_type: Optional[str] = dataclasses.field(default=None)
    rgd_id: Optional[int] = dataclasses.field(default=None)
    species_type_key: Optional[int] = dataclasses.field(default=None)
    title: Optional[str] = dataclasses.field(default=None)
    url_web_reference: Optional[str] = dataclasses.field(default=None)
    volume: Optional[str] = dataclasses.field(default=None)
    
