import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Urls:
    r"""Urls
    List of URLs
    """
    
    urls: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('urls') }})
    
