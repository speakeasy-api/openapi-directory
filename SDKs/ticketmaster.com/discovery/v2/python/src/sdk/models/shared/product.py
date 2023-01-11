import dataclasses
from typing import Optional


@dataclasses.dataclass
class Product:
    r"""Product
    Product
    """
    
    id: Optional[str] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    type: Optional[str] = dataclasses.field(default=None)
    url: Optional[str] = dataclasses.field(default=None)
    
