import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2deidentify as shared_googleprivacydlpv2deidentify
from ..shared import googleprivacydlpv2publishtopubsub as shared_googleprivacydlpv2publishtopubsub
from ..shared import googleprivacydlpv2savefindings as shared_googleprivacydlpv2savefindings


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2Action:
    r"""GooglePrivacyDlpV2Action
    A task to execute on the completion of a job. See https://cloud.google.com/dlp/docs/concepts-actions to learn more.
    """
    
    deidentify: Optional[shared_googleprivacydlpv2deidentify.GooglePrivacyDlpV2Deidentify] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deidentify') }})
    job_notification_emails: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobNotificationEmails') }})
    pub_sub: Optional[shared_googleprivacydlpv2publishtopubsub.GooglePrivacyDlpV2PublishToPubSub] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubSub') }})
    publish_findings_to_cloud_data_catalog: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishFindingsToCloudDataCatalog') }})
    publish_summary_to_cscc: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishSummaryToCscc') }})
    publish_to_stackdriver: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishToStackdriver') }})
    save_findings: Optional[shared_googleprivacydlpv2savefindings.GooglePrivacyDlpV2SaveFindings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saveFindings') }})
    
