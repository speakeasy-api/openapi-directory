import dataclasses
from typing import Any,Optional
from enum import Enum

class IngestionResultStatusEnum(str, Enum):
    ERROR = "Error"
    SUCCESS_WARNING = "SuccessWarning"
    SUCCESS = "Success"


@dataclasses.dataclass
class IngestionResult:
    r"""IngestionResult
    This class defines the IngestionResult on the Publish API
    """
    
    status: IngestionResultStatusEnum = dataclasses.field()
    id: Optional[str] = dataclasses.field(default=None)
    ignored_properties: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    invalid_properties: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    invalid_values: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    missing_properties: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    unknown_properties: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    
