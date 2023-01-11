import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configmanagementpolicycontrollermonitoring as shared_configmanagementpolicycontrollermonitoring


@dataclass_json
@dataclasses.dataclass
class ConfigManagementPolicyController:
    r"""ConfigManagementPolicyController
    Configuration for Policy Controller
    """
    
    audit_interval_seconds: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auditIntervalSeconds') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    exemptable_namespaces: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exemptableNamespaces') }})
    log_denies_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logDeniesEnabled') }})
    monitoring: Optional[shared_configmanagementpolicycontrollermonitoring.ConfigManagementPolicyControllerMonitoring] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitoring') }})
    mutation_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mutationEnabled') }})
    referential_rules_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referentialRulesEnabled') }})
    template_library_installed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateLibraryInstalled') }})
    
