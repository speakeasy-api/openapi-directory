import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import policycontrollermonitoringconfig as shared_policycontrollermonitoringconfig
from ..shared import policycontrollertemplatelibraryconfig as shared_policycontrollertemplatelibraryconfig

class PolicyControllerHubConfigInstallSpecEnum(str, Enum):
    INSTALL_SPEC_UNSPECIFIED = "INSTALL_SPEC_UNSPECIFIED"
    INSTALL_SPEC_NOT_INSTALLED = "INSTALL_SPEC_NOT_INSTALLED"
    INSTALL_SPEC_ENABLED = "INSTALL_SPEC_ENABLED"
    INSTALL_SPEC_SUSPENDED = "INSTALL_SPEC_SUSPENDED"


@dataclass_json
@dataclasses.dataclass
class PolicyControllerHubConfig:
    r"""PolicyControllerHubConfig
    Configuration for Policy Controller
    """
    
    audit_interval_seconds: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auditIntervalSeconds') }})
    exemptable_namespaces: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exemptableNamespaces') }})
    install_spec: Optional[PolicyControllerHubConfigInstallSpecEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installSpec') }})
    log_denies_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logDeniesEnabled') }})
    monitoring: Optional[shared_policycontrollermonitoringconfig.PolicyControllerMonitoringConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitoring') }})
    mutation_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mutationEnabled') }})
    referential_rules_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referentialRulesEnabled') }})
    template_library_config: Optional[shared_policycontrollertemplatelibraryconfig.PolicyControllerTemplateLibraryConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateLibraryConfig') }})
    
