import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authconfigtemplate as shared_authconfigtemplate
from ..shared import configvariabletemplate as shared_configvariabletemplate
from ..shared import egresscontrolconfig as shared_egresscontrolconfig
from ..shared import rolegrant as shared_rolegrant
from ..shared import supportedruntimefeatures as shared_supportedruntimefeatures

class ConnectorVersionLaunchStageEnum(str, Enum):
    LAUNCH_STAGE_UNSPECIFIED = "LAUNCH_STAGE_UNSPECIFIED"
    PREVIEW = "PREVIEW"
    GA = "GA"
    DEPRECATED = "DEPRECATED"


@dataclass_json
@dataclasses.dataclass
class ConnectorVersion:
    r"""ConnectorVersion
    ConnectorVersion indicates a specific version of a connector.
    """
    
    auth_config_templates: Optional[list[shared_authconfigtemplate.AuthConfigTemplate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authConfigTemplates') }})
    config_variable_templates: Optional[list[shared_configvariabletemplate.ConfigVariableTemplate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configVariableTemplates') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    egress_control_config: Optional[shared_egresscontrolconfig.EgressControlConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('egressControlConfig') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    launch_stage: Optional[ConnectorVersionLaunchStageEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchStage') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    release_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseVersion') }})
    role_grant: Optional[shared_rolegrant.RoleGrant] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleGrant') }})
    role_grants: Optional[list[shared_rolegrant.RoleGrant]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleGrants') }})
    supported_runtime_features: Optional[shared_supportedruntimefeatures.SupportedRuntimeFeatures] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedRuntimeFeatures') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
