package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostMarketingV3MarketingEventsEventsDeleteArchiveBatchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchInputMarketingEventExternalUniqueIdentifier request;
    public PostMarketingV3MarketingEventsEventsDeleteArchiveBatchRequest withRequest(openapisdk.models.shared.BatchInputMarketingEventExternalUniqueIdentifier request) {
        this.request = request;
        return this;
    }
    public PostMarketingV3MarketingEventsEventsDeleteArchiveBatchSecurity security;
    public PostMarketingV3MarketingEventsEventsDeleteArchiveBatchRequest withSecurity(PostMarketingV3MarketingEventsEventsDeleteArchiveBatchSecurity security) {
        this.security = security;
        return this;
    }
}