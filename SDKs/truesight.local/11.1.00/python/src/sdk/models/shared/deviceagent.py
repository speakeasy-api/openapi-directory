import dataclasses
from typing import Optional


@dataclasses.dataclass
class DeviceAgent:
    r"""DeviceAgent
    Contains all information regarding a specific PATROL Agent.
    """
    
    connection_status: Optional[str] = dataclasses.field(default=None)
    id: Optional[str] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    os: Optional[str] = dataclasses.field(default=None)
    port: Optional[str] = dataclasses.field(default=None)
    url: Optional[str] = dataclasses.field(default=None)
    version: Optional[str] = dataclasses.field(default=None)
    
