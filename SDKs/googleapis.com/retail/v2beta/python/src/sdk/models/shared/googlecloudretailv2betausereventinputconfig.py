"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import googlecloudretailv2betabigquerysource as shared_googlecloudretailv2betabigquerysource
from ..shared import googlecloudretailv2betagcssource as shared_googlecloudretailv2betagcssource
from ..shared import googlecloudretailv2betausereventinlinesource as shared_googlecloudretailv2betausereventinlinesource
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GoogleCloudRetailV2betaUserEventInputConfigInput:
    r"""The input config source for user events."""
    
    big_query_source: Optional[shared_googlecloudretailv2betabigquerysource.GoogleCloudRetailV2betaBigQuerySource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('bigQuerySource'), 'exclude': lambda f: f is None }})
    r"""BigQuery source import data from."""  
    gcs_source: Optional[shared_googlecloudretailv2betagcssource.GoogleCloudRetailV2betaGcsSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('gcsSource'), 'exclude': lambda f: f is None }})
    r"""Google Cloud Storage location for input content."""  
    user_event_inline_source: Optional[shared_googlecloudretailv2betausereventinlinesource.GoogleCloudRetailV2betaUserEventInlineSourceInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('userEventInlineSource'), 'exclude': lambda f: f is None }})
    r"""The inline source for the input config for ImportUserEvents method."""  
    