package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=externalAccountId")
    public String externalAccountId;
    public GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdQueryParams withExternalAccountId(String externalAccountId) {
        this.externalAccountId = externalAccountId;
        return this;
    }
}