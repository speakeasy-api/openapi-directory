import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import objectmeta as shared_objectmeta
from ..shared import configurationspec as shared_configurationspec
from ..shared import configurationstatus as shared_configurationstatus


@dataclass_json
@dataclasses.dataclass
class Configuration:
    r"""Configuration
    Configuration represents the \"floating HEAD\" of a linear history of Revisions, and optionally how the containers those revisions reference are built. Users create new Revisions by updating the Configuration's spec. The \"latest created\" revision's name is available under status, as is the \"latest ready\" revision's name. See also: https://github.com/knative/specs/blob/main/specs/serving/overview.md#configuration
    """
    
    api_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiVersion') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    metadata: Optional[shared_objectmeta.ObjectMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    spec: Optional[shared_configurationspec.ConfigurationSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    status: Optional[shared_configurationstatus.ConfigurationStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
