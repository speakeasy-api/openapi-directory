import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import access as shared_access
from ..shared import compliance as shared_compliance
from ..shared import connection as shared_connection
from ..shared import contactdetails as shared_contactdetails
from ..shared import container as shared_container
from ..shared import database as shared_database
from ..shared import exfiltration as shared_exfiltration
from ..shared import googlecloudsecuritycenterv1externalsystem as shared_googlecloudsecuritycenterv1externalsystem
from ..shared import file as shared_file
from ..shared import iambinding as shared_iambinding
from ..shared import indicator as shared_indicator
from ..shared import kernelrootkit as shared_kernelrootkit
from ..shared import kubernetes as shared_kubernetes
from ..shared import mitreattack as shared_mitreattack
from ..shared import process as shared_process
from ..shared import securitymarks as shared_securitymarks
from ..shared import vulnerability as shared_vulnerability

class FindingFindingClassEnum(str, Enum):
    FINDING_CLASS_UNSPECIFIED = "FINDING_CLASS_UNSPECIFIED"
    THREAT = "THREAT"
    VULNERABILITY = "VULNERABILITY"
    MISCONFIGURATION = "MISCONFIGURATION"
    OBSERVATION = "OBSERVATION"
    SCC_ERROR = "SCC_ERROR"

class FindingMuteEnum(str, Enum):
    MUTE_UNSPECIFIED = "MUTE_UNSPECIFIED"
    MUTED = "MUTED"
    UNMUTED = "UNMUTED"
    UNDEFINED = "UNDEFINED"

class FindingSeverityEnum(str, Enum):
    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    CRITICAL = "CRITICAL"
    HIGH = "HIGH"
    MEDIUM = "MEDIUM"
    LOW = "LOW"

class FindingStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"


@dataclass_json
@dataclasses.dataclass
class Finding:
    r"""Finding
    Security Command Center finding. A finding is a record of assessment data like security, risk, health, or privacy, that is ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, a cross-site scripting (XSS) vulnerability in an App Engine application is a finding.
    """
    
    access: Optional[shared_access.Access] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    canonical_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canonicalName') }})
    category: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    compliances: Optional[list[shared_compliance.Compliance]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compliances') }})
    connections: Optional[list[shared_connection.Connection]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    contacts: Optional[dict[str, shared_contactdetails.ContactDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contacts') }})
    containers: Optional[list[shared_container.Container]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containers') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    database: Optional[shared_database.Database] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('database') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    event_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTime') }})
    exfiltration: Optional[shared_exfiltration.Exfiltration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exfiltration') }})
    external_systems: Optional[dict[str, shared_googlecloudsecuritycenterv1externalsystem.GoogleCloudSecuritycenterV1ExternalSystem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalSystems') }})
    external_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalUri') }})
    files: Optional[list[shared_file.File]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    finding_class: Optional[FindingFindingClassEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingClass') }})
    iam_bindings: Optional[list[shared_iambinding.IamBinding]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamBindings') }})
    indicator: Optional[shared_indicator.Indicator] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indicator') }})
    kernel_rootkit: Optional[shared_kernelrootkit.KernelRootkit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kernelRootkit') }})
    kubernetes: Optional[shared_kubernetes.Kubernetes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kubernetes') }})
    mitre_attack: Optional[shared_mitreattack.MitreAttack] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mitreAttack') }})
    mute: Optional[FindingMuteEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mute') }})
    mute_initiator: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('muteInitiator') }})
    mute_update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('muteUpdateTime') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    next_steps: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextSteps') }})
    parent: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    parent_display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentDisplayName') }})
    processes: Optional[list[shared_process.Process]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processes') }})
    resource_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceName') }})
    security_marks: Optional[shared_securitymarks.SecurityMarks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityMarks') }})
    severity: Optional[FindingSeverityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    source_properties: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceProperties') }})
    state: Optional[FindingStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    vulnerability: Optional[shared_vulnerability.Vulnerability] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vulnerability') }})
    

@dataclass_json
@dataclasses.dataclass
class FindingInput:
    r"""FindingInput
    Security Command Center finding. A finding is a record of assessment data like security, risk, health, or privacy, that is ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, a cross-site scripting (XSS) vulnerability in an App Engine application is a finding.
    """
    
    access: Optional[shared_access.Access] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    canonical_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canonicalName') }})
    category: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    compliances: Optional[list[shared_compliance.Compliance]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compliances') }})
    connections: Optional[list[shared_connection.Connection]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    containers: Optional[list[shared_container.Container]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containers') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    database: Optional[shared_database.Database] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('database') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    event_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTime') }})
    exfiltration: Optional[shared_exfiltration.Exfiltration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exfiltration') }})
    external_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalUri') }})
    files: Optional[list[shared_file.File]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    finding_class: Optional[FindingFindingClassEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingClass') }})
    iam_bindings: Optional[list[shared_iambinding.IamBinding]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamBindings') }})
    indicator: Optional[shared_indicator.Indicator] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indicator') }})
    kernel_rootkit: Optional[shared_kernelrootkit.KernelRootkit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kernelRootkit') }})
    kubernetes: Optional[shared_kubernetes.Kubernetes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kubernetes') }})
    mitre_attack: Optional[shared_mitreattack.MitreAttack] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mitreAttack') }})
    mute: Optional[FindingMuteEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mute') }})
    mute_initiator: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('muteInitiator') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    next_steps: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextSteps') }})
    parent: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    processes: Optional[list[shared_process.Process]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processes') }})
    resource_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceName') }})
    security_marks: Optional[shared_securitymarks.SecurityMarks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityMarks') }})
    severity: Optional[FindingSeverityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    source_properties: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceProperties') }})
    state: Optional[FindingStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    vulnerability: Optional[shared_vulnerability.Vulnerability] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vulnerability') }})
    
