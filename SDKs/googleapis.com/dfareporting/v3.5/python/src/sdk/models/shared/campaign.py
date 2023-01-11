import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import adblockingconfiguration as shared_adblockingconfiguration
from ..shared import creativeoptimizationconfiguration as shared_creativeoptimizationconfiguration
from ..shared import dimensionvalue as shared_dimensionvalue
from ..shared import audiencesegmentgroup as shared_audiencesegmentgroup
from ..shared import clickthroughurlsuffixproperties as shared_clickthroughurlsuffixproperties
from ..shared import lastmodifiedinfo as shared_lastmodifiedinfo
from ..shared import defaultclickthrougheventtagproperties as shared_defaultclickthrougheventtagproperties
from ..shared import eventtagoverride as shared_eventtagoverride
from ..shared import measurementpartnercampaignlink as shared_measurementpartnercampaignlink


@dataclass_json
@dataclasses.dataclass
class Campaign:
    r"""Campaign
    Contains properties of a Campaign Manager campaign.
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    ad_blocking_configuration: Optional[shared_adblockingconfiguration.AdBlockingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adBlockingConfiguration') }})
    additional_creative_optimization_configurations: Optional[list[shared_creativeoptimizationconfiguration.CreativeOptimizationConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalCreativeOptimizationConfigurations') }})
    advertiser_group_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserGroupId') }})
    advertiser_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    advertiser_id_dimension_value: Optional[shared_dimensionvalue.DimensionValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserIdDimensionValue') }})
    archived: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived') }})
    audience_segment_groups: Optional[list[shared_audiencesegmentgroup.AudienceSegmentGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audienceSegmentGroups') }})
    billing_invoice_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingInvoiceCode') }})
    click_through_url_suffix_properties: Optional[shared_clickthroughurlsuffixproperties.ClickThroughURLSuffixProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickThroughUrlSuffixProperties') }})
    comment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    create_info: Optional[shared_lastmodifiedinfo.LastModifiedInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createInfo') }})
    creative_group_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeGroupIds') }})
    creative_optimization_configuration: Optional[shared_creativeoptimizationconfiguration.CreativeOptimizationConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeOptimizationConfiguration') }})
    default_click_through_event_tag_properties: Optional[shared_defaultclickthrougheventtagproperties.DefaultClickThroughEventTagProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultClickThroughEventTagProperties') }})
    default_landing_page_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultLandingPageId') }})
    end_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_tag_overrides: Optional[list[shared_eventtagoverride.EventTagOverride]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTagOverrides') }})
    external_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalId') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    id_dimension_value: Optional[shared_dimensionvalue.DimensionValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idDimensionValue') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    last_modified_info: Optional[shared_lastmodifiedinfo.LastModifiedInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedInfo') }})
    measurement_partner_link: Optional[shared_measurementpartnercampaignlink.MeasurementPartnerCampaignLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('measurementPartnerLink') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    nielsen_ocr_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nielsenOcrEnabled') }})
    start_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    subaccount_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subaccountId') }})
    trafficker_emails: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traffickerEmails') }})
    
