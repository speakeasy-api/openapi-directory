import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CorsSettings:
    r"""CorsSettings
    The configuration for cors support
    """
    
    allow_credentials: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowCredentials') }})
    allow_headers: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowHeaders') }})
    allow_methods: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowMethods') }})
    allow_origin: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowOrigin') }})
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    excluded_patterns: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludedPatterns') }})
    expose_headers: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('exposeHeaders') }})
    max_age: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxAge') }})
    
