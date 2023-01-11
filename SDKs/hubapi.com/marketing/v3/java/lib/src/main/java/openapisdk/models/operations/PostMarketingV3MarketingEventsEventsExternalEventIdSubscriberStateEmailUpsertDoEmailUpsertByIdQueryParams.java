package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=externalAccountId")
    public String externalAccountId;
    public PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdQueryParams withExternalAccountId(String externalAccountId) {
        this.externalAccountId = externalAccountId;
        return this;
    }
}