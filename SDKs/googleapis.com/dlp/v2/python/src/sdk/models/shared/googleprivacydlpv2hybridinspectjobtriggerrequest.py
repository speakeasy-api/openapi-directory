"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import googleprivacydlpv2hybridcontentitem as shared_googleprivacydlpv2hybridcontentitem
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GooglePrivacyDlpV2HybridInspectJobTriggerRequest:
    r"""Request to search for potentially sensitive info in a custom location."""
    
    hybrid_item: Optional[shared_googleprivacydlpv2hybridcontentitem.GooglePrivacyDlpV2HybridContentItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('hybridItem'), 'exclude': lambda f: f is None }})
    r"""An individual hybrid item to inspect. Will be stored temporarily during processing."""  
    