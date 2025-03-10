"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UndeleteAlertRequest:
    r"""A request to undelete a specific alert that was marked for deletion."""
    
    customer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('customerId'), 'exclude': lambda f: f is None }})
    r"""Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial \\"C\\" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793)."""  
    