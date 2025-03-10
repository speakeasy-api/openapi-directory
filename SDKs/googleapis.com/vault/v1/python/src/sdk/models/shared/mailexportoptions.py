"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class MailExportOptionsExportFormatEnum(str, Enum):
    r"""The file format for exported messages."""
    EXPORT_FORMAT_UNSPECIFIED = 'EXPORT_FORMAT_UNSPECIFIED'
    MBOX = 'MBOX'
    PST = 'PST'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class MailExportOptions:
    r"""Options for Gmail exports."""
    
    export_format: Optional[MailExportOptionsExportFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('exportFormat'), 'exclude': lambda f: f is None }})
    r"""The file format for exported messages."""  
    show_confidential_mode_content: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('showConfidentialModeContent'), 'exclude': lambda f: f is None }})
    r"""To export confidential mode content, set to **true**."""  
    use_new_export: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('useNewExport'), 'exclude': lambda f: f is None }})
    r"""To use the new export system, set to **true**."""  
    