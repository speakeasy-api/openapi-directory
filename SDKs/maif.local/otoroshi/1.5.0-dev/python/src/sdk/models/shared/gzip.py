import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Gzip:
    r"""Gzip
    Configuration for gzip of service responses
    """
    
    black_list: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blackList') }})
    buffer_size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bufferSize') }})
    chunked_threshold: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('chunkedThreshold') }})
    compression_level: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('compressionLevel') }})
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    excluded_patterns: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludedPatterns') }})
    white_list: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('whiteList') }})
    
