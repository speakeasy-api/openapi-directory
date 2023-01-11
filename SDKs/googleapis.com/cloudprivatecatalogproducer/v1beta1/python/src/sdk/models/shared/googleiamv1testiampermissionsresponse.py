import dataclasses
from typing import Optional


@dataclasses.dataclass
class GoogleIamV1TestIamPermissionsResponse:
    r"""GoogleIamV1TestIamPermissionsResponse
    Response message for `TestIamPermissions` method.
    """
    
    permissions: Optional[list[str]] = dataclasses.field(default=None)
    
