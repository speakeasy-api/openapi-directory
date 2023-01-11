import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class GoogleCloudPrivatecatalogV1beta1Catalog:
    r"""GoogleCloudPrivatecatalogV1beta1Catalog
    The readonly representation of a catalog computed with a given resource
    context.
    """
    
    create_time: Optional[str] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    display_name: Optional[str] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    update_time: Optional[str] = dataclasses.field(default=None)
    
