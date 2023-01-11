import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class Annotation:
    annotated_object_rgd_id: Optional[int] = dataclasses.field(default=None)
    annotation_extension: Optional[str] = dataclasses.field(default=None)
    aspect: Optional[str] = dataclasses.field(default=None)
    created_by: Optional[int] = dataclasses.field(default=None)
    created_date: Optional[datetime] = dataclasses.field(default=None)
    data_src: Optional[str] = dataclasses.field(default=None)
    evidence: Optional[str] = dataclasses.field(default=None)
    gene_product_form_id: Optional[str] = dataclasses.field(default=None)
    key: Optional[int] = dataclasses.field(default=None)
    last_modified_by: Optional[int] = dataclasses.field(default=None)
    last_modified_date: Optional[datetime] = dataclasses.field(default=None)
    notes: Optional[str] = dataclasses.field(default=None)
    object_name: Optional[str] = dataclasses.field(default=None)
    object_symbol: Optional[str] = dataclasses.field(default=None)
    original_created_date: Optional[datetime] = dataclasses.field(default=None)
    qualifier: Optional[str] = dataclasses.field(default=None)
    ref_rgd_id: Optional[int] = dataclasses.field(default=None)
    relative_to: Optional[str] = dataclasses.field(default=None)
    rgd_object_key: Optional[int] = dataclasses.field(default=None)
    species_type_key: Optional[int] = dataclasses.field(default=None)
    term: Optional[str] = dataclasses.field(default=None)
    term_acc: Optional[str] = dataclasses.field(default=None)
    with_info: Optional[str] = dataclasses.field(default=None)
    xref_source: Optional[str] = dataclasses.field(default=None)
    
