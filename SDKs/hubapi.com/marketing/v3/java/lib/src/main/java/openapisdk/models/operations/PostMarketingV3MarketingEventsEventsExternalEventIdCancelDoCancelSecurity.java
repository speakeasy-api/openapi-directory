package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemePrivateAppsLegacy privateAppsLegacy;
    public PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurity withPrivateAppsLegacy(openapisdk.models.shared.SchemePrivateAppsLegacy privateAppsLegacy) {
        this.privateAppsLegacy = privateAppsLegacy;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOauth2Legacy oauth2Legacy;
    public PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurity withOauth2Legacy(openapisdk.models.shared.SchemeOauth2Legacy oauth2Legacy) {
        this.oauth2Legacy = oauth2Legacy;
        return this;
    }
}