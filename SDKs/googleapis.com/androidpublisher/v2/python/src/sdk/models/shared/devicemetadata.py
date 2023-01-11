import dataclasses
from typing import Optional


@dataclasses.dataclass
class DeviceMetadata:
    cpu_make: Optional[str] = dataclasses.field(default=None)
    cpu_model: Optional[str] = dataclasses.field(default=None)
    device_class: Optional[str] = dataclasses.field(default=None)
    gl_es_version: Optional[int] = dataclasses.field(default=None)
    manufacturer: Optional[str] = dataclasses.field(default=None)
    native_platform: Optional[str] = dataclasses.field(default=None)
    product_name: Optional[str] = dataclasses.field(default=None)
    ram_mb: Optional[int] = dataclasses.field(default=None)
    screen_density_dpi: Optional[int] = dataclasses.field(default=None)
    screen_height_px: Optional[int] = dataclasses.field(default=None)
    screen_width_px: Optional[int] = dataclasses.field(default=None)
    
