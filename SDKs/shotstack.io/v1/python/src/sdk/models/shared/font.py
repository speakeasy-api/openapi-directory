import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Font:
    r"""Font
    Download a custom font to use with the HTML asset type, using the font name in the CSS or font tag. See our [custom fonts](https://shotstack.io/learn/html-custom-fonts/) getting started guide for more details.
    """
    
    src: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('src') }})
    
