import dataclasses
from typing import Optional
from ..shared import location as shared_location


@dataclasses.dataclass
class LocationsListResponse:
    r"""LocationsListResponse
    A list of Locations. This is the response from the server to GET requests on the locations collection.
    """
    
    items: Optional[list[shared_location.Location]] = dataclasses.field(default=None)
    kind: Optional[str] = dataclasses.field(default=None)
    
