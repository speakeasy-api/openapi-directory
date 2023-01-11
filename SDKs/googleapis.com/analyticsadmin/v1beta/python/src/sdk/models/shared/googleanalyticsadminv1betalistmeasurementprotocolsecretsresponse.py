import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleanalyticsadminv1betameasurementprotocolsecret as shared_googleanalyticsadminv1betameasurementprotocolsecret


@dataclass_json
@dataclasses.dataclass
class GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse:
    r"""GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse
    Response message for ListMeasurementProtocolSecret RPC
    """
    
    measurement_protocol_secrets: Optional[list[shared_googleanalyticsadminv1betameasurementprotocolsecret.GoogleAnalyticsAdminV1betaMeasurementProtocolSecret]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('measurementProtocolSecrets') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
