import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class GoogleCloudPrivatecatalogV1beta1Product:
    r"""GoogleCloudPrivatecatalogV1beta1Product
    The readonly representation of a product computed with a given resource
    context.
    """
    
    asset_type: Optional[str] = dataclasses.field(default=None)
    create_time: Optional[str] = dataclasses.field(default=None)
    display_metadata: Optional[dict[str, Any]] = dataclasses.field(default=None)
    icon_uri: Optional[str] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    update_time: Optional[str] = dataclasses.field(default=None)
    
