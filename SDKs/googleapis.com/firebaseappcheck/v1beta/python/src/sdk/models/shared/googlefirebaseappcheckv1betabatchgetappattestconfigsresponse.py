"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import googlefirebaseappcheckv1betaappattestconfig as shared_googlefirebaseappcheckv1betaappattestconfig
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse:
    r"""Response message for the BatchGetAppAttestConfigs method."""
    
    configs: Optional[list[shared_googlefirebaseappcheckv1betaappattestconfig.GoogleFirebaseAppcheckV1betaAppAttestConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('configs'), 'exclude': lambda f: f is None }})
    r"""AppAttestConfigs retrieved."""  
    