import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attestationoccurrence as shared_attestationoccurrence
from ..shared import buildoccurrence as shared_buildoccurrence
from ..shared import complianceoccurrence as shared_complianceoccurrence
from ..shared import deploymentoccurrence as shared_deploymentoccurrence
from ..shared import discoveryoccurrence as shared_discoveryoccurrence
from ..shared import dsseattestationoccurrence as shared_dsseattestationoccurrence
from ..shared import envelope as shared_envelope
from ..shared import imageoccurrence as shared_imageoccurrence
from ..shared import packageoccurrence as shared_packageoccurrence
from ..shared import upgradeoccurrence as shared_upgradeoccurrence
from ..shared import vulnerabilityoccurrence as shared_vulnerabilityoccurrence

class OccurrenceKindEnum(str, Enum):
    NOTE_KIND_UNSPECIFIED = "NOTE_KIND_UNSPECIFIED"
    VULNERABILITY = "VULNERABILITY"
    BUILD = "BUILD"
    IMAGE = "IMAGE"
    PACKAGE = "PACKAGE"
    DEPLOYMENT = "DEPLOYMENT"
    DISCOVERY = "DISCOVERY"
    ATTESTATION = "ATTESTATION"
    UPGRADE = "UPGRADE"
    COMPLIANCE = "COMPLIANCE"
    DSSE_ATTESTATION = "DSSE_ATTESTATION"


@dataclass_json
@dataclasses.dataclass
class Occurrence:
    r"""Occurrence
    An instance of an analysis type that has been found on a resource.
    """
    
    attestation: Optional[shared_attestationoccurrence.AttestationOccurrence] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attestation') }})
    build: Optional[shared_buildoccurrence.BuildOccurrence] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build') }})
    compliance: Optional[shared_complianceoccurrence.ComplianceOccurrence] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compliance') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    deployment: Optional[shared_deploymentoccurrence.DeploymentOccurrence] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployment') }})
    discovery: Optional[shared_discoveryoccurrence.DiscoveryOccurrence] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discovery') }})
    dsse_attestation: Optional[shared_dsseattestationoccurrence.DsseAttestationOccurrence] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dsseAttestation') }})
    envelope: Optional[shared_envelope.Envelope] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('envelope') }})
    image: Optional[shared_imageoccurrence.ImageOccurrence] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    kind: Optional[OccurrenceKindEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    note_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noteName') }})
    package: Optional[shared_packageoccurrence.PackageOccurrence] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('package') }})
    remediation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remediation') }})
    resource_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceUri') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    upgrade: Optional[shared_upgradeoccurrence.UpgradeOccurrence] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upgrade') }})
    vulnerability: Optional[shared_vulnerabilityoccurrence.VulnerabilityOccurrence] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vulnerability') }})
    
