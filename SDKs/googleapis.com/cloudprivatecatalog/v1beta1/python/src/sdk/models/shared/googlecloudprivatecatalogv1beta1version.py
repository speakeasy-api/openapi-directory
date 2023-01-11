import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class GoogleCloudPrivatecatalogV1beta1Version:
    r"""GoogleCloudPrivatecatalogV1beta1Version
    The consumer representation of a version which is a child resource under a
    `Product` with asset data.
    """
    
    asset: Optional[dict[str, Any]] = dataclasses.field(default=None)
    create_time: Optional[str] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    update_time: Optional[str] = dataclasses.field(default=None)
    
