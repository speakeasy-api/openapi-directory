import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrecaptchaenterprisev1accountdefenderassessment as shared_googlecloudrecaptchaenterprisev1accountdefenderassessment
from ..shared import googlecloudrecaptchaenterprisev1accountverificationinfo as shared_googlecloudrecaptchaenterprisev1accountverificationinfo
from ..shared import googlecloudrecaptchaenterprisev1event as shared_googlecloudrecaptchaenterprisev1event
from ..shared import googlecloudrecaptchaenterprisev1privatepasswordleakverification as shared_googlecloudrecaptchaenterprisev1privatepasswordleakverification
from ..shared import googlecloudrecaptchaenterprisev1riskanalysis as shared_googlecloudrecaptchaenterprisev1riskanalysis
from ..shared import googlecloudrecaptchaenterprisev1tokenproperties as shared_googlecloudrecaptchaenterprisev1tokenproperties
from ..shared import googlecloudrecaptchaenterprisev1accountverificationinfo as shared_googlecloudrecaptchaenterprisev1accountverificationinfo
from ..shared import googlecloudrecaptchaenterprisev1privatepasswordleakverification as shared_googlecloudrecaptchaenterprisev1privatepasswordleakverification


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecaptchaenterpriseV1AssessmentInput:
    r"""GoogleCloudRecaptchaenterpriseV1AssessmentInput
    A recaptcha assessment resource.
    """
    
    account_defender_assessment: Optional[shared_googlecloudrecaptchaenterprisev1accountdefenderassessment.GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountDefenderAssessment') }})
    account_verification: Optional[shared_googlecloudrecaptchaenterprisev1accountverificationinfo.GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountVerification') }})
    event: Optional[shared_googlecloudrecaptchaenterprisev1event.GoogleCloudRecaptchaenterpriseV1Event] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    private_password_leak_verification: Optional[shared_googlecloudrecaptchaenterprisev1privatepasswordleakverification.GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerificationInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privatePasswordLeakVerification') }})
    risk_analysis: Optional[shared_googlecloudrecaptchaenterprisev1riskanalysis.GoogleCloudRecaptchaenterpriseV1RiskAnalysis] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('riskAnalysis') }})
    token_properties: Optional[shared_googlecloudrecaptchaenterprisev1tokenproperties.GoogleCloudRecaptchaenterpriseV1TokenProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenProperties') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecaptchaenterpriseV1Assessment:
    r"""GoogleCloudRecaptchaenterpriseV1Assessment
    A recaptcha assessment resource.
    """
    
    account_defender_assessment: Optional[shared_googlecloudrecaptchaenterprisev1accountdefenderassessment.GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountDefenderAssessment') }})
    account_verification: Optional[shared_googlecloudrecaptchaenterprisev1accountverificationinfo.GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountVerification') }})
    event: Optional[shared_googlecloudrecaptchaenterprisev1event.GoogleCloudRecaptchaenterpriseV1Event] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    private_password_leak_verification: Optional[shared_googlecloudrecaptchaenterprisev1privatepasswordleakverification.GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privatePasswordLeakVerification') }})
    risk_analysis: Optional[shared_googlecloudrecaptchaenterprisev1riskanalysis.GoogleCloudRecaptchaenterpriseV1RiskAnalysis] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('riskAnalysis') }})
    token_properties: Optional[shared_googlecloudrecaptchaenterprisev1tokenproperties.GoogleCloudRecaptchaenterpriseV1TokenProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenProperties') }})
    
