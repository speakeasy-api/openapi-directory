import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudassuredworkloadsv1workloadcompliancestatus as shared_googlecloudassuredworkloadsv1workloadcompliancestatus
from ..shared import googlecloudassuredworkloadsv1workloadkmssettings as shared_googlecloudassuredworkloadsv1workloadkmssettings
from ..shared import googlecloudassuredworkloadsv1workloadresourcesettings as shared_googlecloudassuredworkloadsv1workloadresourcesettings
from ..shared import googlecloudassuredworkloadsv1workloadsaaenrollmentresponse as shared_googlecloudassuredworkloadsv1workloadsaaenrollmentresponse
from ..shared import googlecloudassuredworkloadsv1workloadresourceinfo as shared_googlecloudassuredworkloadsv1workloadresourceinfo

class GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum(str, Enum):
    COMPLIANCE_REGIME_UNSPECIFIED = "COMPLIANCE_REGIME_UNSPECIFIED"
    IL4 = "IL4"
    CJIS = "CJIS"
    FEDRAMP_HIGH = "FEDRAMP_HIGH"
    FEDRAMP_MODERATE = "FEDRAMP_MODERATE"
    US_REGIONAL_ACCESS = "US_REGIONAL_ACCESS"
    HIPAA = "HIPAA"
    HITRUST = "HITRUST"
    EU_REGIONS_AND_SUPPORT = "EU_REGIONS_AND_SUPPORT"
    CA_REGIONS_AND_SUPPORT = "CA_REGIONS_AND_SUPPORT"
    ITAR = "ITAR"
    AU_REGIONS_AND_US_SUPPORT = "AU_REGIONS_AND_US_SUPPORT"
    ASSURED_WORKLOADS_FOR_PARTNERS = "ASSURED_WORKLOADS_FOR_PARTNERS"
    ISR_REGIONS = "ISR_REGIONS"

class GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum(str, Enum):
    PARTNER_UNSPECIFIED = "PARTNER_UNSPECIFIED"
    LOCAL_CONTROLS_BY_S3_NS = "LOCAL_CONTROLS_BY_S3NS"
    SOVEREIGN_CONTROLS_BY_T_SYSTEMS = "SOVEREIGN_CONTROLS_BY_T_SYSTEMS"

class GoogleCloudAssuredworkloadsV1WorkloadKajEnrollmentStateEnum(str, Enum):
    KAJ_ENROLLMENT_STATE_UNSPECIFIED = "KAJ_ENROLLMENT_STATE_UNSPECIFIED"
    KAJ_ENROLLMENT_STATE_PENDING = "KAJ_ENROLLMENT_STATE_PENDING"
    KAJ_ENROLLMENT_STATE_COMPLETE = "KAJ_ENROLLMENT_STATE_COMPLETE"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudAssuredworkloadsV1WorkloadInput:
    r"""GoogleCloudAssuredworkloadsV1WorkloadInput
    A Workload object for managing highly regulated workloads of cloud customers.
    """
    
    billing_account: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingAccount') }})
    compliance_regime: Optional[GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complianceRegime') }})
    compliance_status: Optional[shared_googlecloudassuredworkloadsv1workloadcompliancestatus.GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complianceStatus') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    enable_sovereign_controls: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableSovereignControls') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    kms_settings: Optional[shared_googlecloudassuredworkloadsv1workloadkmssettings.GoogleCloudAssuredworkloadsV1WorkloadKmsSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsSettings') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    partner: Optional[GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partner') }})
    provisioned_resources_parent: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provisionedResourcesParent') }})
    resource_settings: Optional[list[shared_googlecloudassuredworkloadsv1workloadresourcesettings.GoogleCloudAssuredworkloadsV1WorkloadResourceSettings]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceSettings') }})
    saa_enrollment_response: Optional[shared_googlecloudassuredworkloadsv1workloadsaaenrollmentresponse.GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saaEnrollmentResponse') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudAssuredworkloadsV1Workload:
    r"""GoogleCloudAssuredworkloadsV1Workload
    A Workload object for managing highly regulated workloads of cloud customers.
    """
    
    billing_account: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingAccount') }})
    compliance_regime: Optional[GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complianceRegime') }})
    compliance_status: Optional[shared_googlecloudassuredworkloadsv1workloadcompliancestatus.GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complianceStatus') }})
    compliant_but_disallowed_services: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compliantButDisallowedServices') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    enable_sovereign_controls: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableSovereignControls') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    kaj_enrollment_state: Optional[GoogleCloudAssuredworkloadsV1WorkloadKajEnrollmentStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kajEnrollmentState') }})
    kms_settings: Optional[shared_googlecloudassuredworkloadsv1workloadkmssettings.GoogleCloudAssuredworkloadsV1WorkloadKmsSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsSettings') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    partner: Optional[GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partner') }})
    provisioned_resources_parent: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provisionedResourcesParent') }})
    resource_settings: Optional[list[shared_googlecloudassuredworkloadsv1workloadresourcesettings.GoogleCloudAssuredworkloadsV1WorkloadResourceSettings]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceSettings') }})
    resources: Optional[list[shared_googlecloudassuredworkloadsv1workloadresourceinfo.GoogleCloudAssuredworkloadsV1WorkloadResourceInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    saa_enrollment_response: Optional[shared_googlecloudassuredworkloadsv1workloadsaaenrollmentresponse.GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saaEnrollmentResponse') }})
    
