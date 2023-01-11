import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bwdifconfig as shared_bwdifconfig
from ..shared import yadifconfig as shared_yadifconfig


@dataclass_json
@dataclasses.dataclass
class Deinterlace:
    r"""Deinterlace
    Deinterlace configuration for input video.
    """
    
    bwdif: Optional[shared_bwdifconfig.BwdifConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bwdif') }})
    yadif: Optional[shared_yadifconfig.YadifConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yadif') }})
    
