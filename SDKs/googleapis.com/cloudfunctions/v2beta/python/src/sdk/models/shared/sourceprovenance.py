"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import reposource as shared_reposource
from ..shared import storagesource as shared_storagesource
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SourceProvenance:
    r"""Provenance of the source. Ways to find the original source, or verify that some source was used for this build."""
    
    resolved_repo_source: Optional[shared_reposource.RepoSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('resolvedRepoSource'), 'exclude': lambda f: f is None }})
    r"""Location of the source in a Google Cloud Source Repository."""  
    resolved_storage_source: Optional[shared_storagesource.StorageSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('resolvedStorageSource'), 'exclude': lambda f: f is None }})
    r"""Location of the source in an archive file in Google Cloud Storage."""  
    