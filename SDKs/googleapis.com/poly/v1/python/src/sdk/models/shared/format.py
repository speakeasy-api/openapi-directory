import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import formatcomplexity as shared_formatcomplexity
from ..shared import file as shared_file


@dataclass_json
@dataclasses.dataclass
class Format:
    r"""Format
    The same asset can be represented in different formats, for example, a [WaveFront .obj](//en.wikipedia.org/wiki/Wavefront_.obj_file) file with its corresponding .mtl file or a [Khronos glTF](//www.khronos.org/gltf) file with its corresponding .glb binary data. A format refers to a specific representation of an asset and contains all information needed to retrieve and describe this representation.
    """
    
    format_complexity: Optional[shared_formatcomplexity.FormatComplexity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formatComplexity') }})
    format_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formatType') }})
    resources: Optional[list[shared_file.File]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    root: Optional[shared_file.File] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('root') }})
    
