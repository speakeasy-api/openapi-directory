import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleanalyticsadminv1betaaccount as shared_googleanalyticsadminv1betaaccount
from ..shared import googleanalyticsadminv1betaconversionevent as shared_googleanalyticsadminv1betaconversionevent
from ..shared import googleanalyticsadminv1betadataretentionsettings as shared_googleanalyticsadminv1betadataretentionsettings
from ..shared import googleanalyticsadminv1betadatastream as shared_googleanalyticsadminv1betadatastream
from ..shared import googleanalyticsadminv1betafirebaselink as shared_googleanalyticsadminv1betafirebaselink
from ..shared import googleanalyticsadminv1betagoogleadslink as shared_googleanalyticsadminv1betagoogleadslink
from ..shared import googleanalyticsadminv1betameasurementprotocolsecret as shared_googleanalyticsadminv1betameasurementprotocolsecret
from ..shared import googleanalyticsadminv1betaproperty as shared_googleanalyticsadminv1betaproperty


@dataclass_json
@dataclasses.dataclass
class GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource:
    r"""GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource
    A snapshot of a resource as before or after the result of a change in change history.
    """
    
    account: Optional[shared_googleanalyticsadminv1betaaccount.GoogleAnalyticsAdminV1betaAccount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    conversion_event: Optional[shared_googleanalyticsadminv1betaconversionevent.GoogleAnalyticsAdminV1betaConversionEvent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversionEvent') }})
    data_retention_settings: Optional[shared_googleanalyticsadminv1betadataretentionsettings.GoogleAnalyticsAdminV1betaDataRetentionSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataRetentionSettings') }})
    data_stream: Optional[shared_googleanalyticsadminv1betadatastream.GoogleAnalyticsAdminV1betaDataStream] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataStream') }})
    firebase_link: Optional[shared_googleanalyticsadminv1betafirebaselink.GoogleAnalyticsAdminV1betaFirebaseLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firebaseLink') }})
    google_ads_link: Optional[shared_googleanalyticsadminv1betagoogleadslink.GoogleAnalyticsAdminV1betaGoogleAdsLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleAdsLink') }})
    measurement_protocol_secret: Optional[shared_googleanalyticsadminv1betameasurementprotocolsecret.GoogleAnalyticsAdminV1betaMeasurementProtocolSecret] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('measurementProtocolSecret') }})
    property: Optional[shared_googleanalyticsadminv1betaproperty.GoogleAnalyticsAdminV1betaProperty] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('property') }})
    
