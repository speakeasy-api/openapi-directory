package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=externalAccountId")
    public String externalAccountId;
    public DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveQueryParams withExternalAccountId(String externalAccountId) {
        this.externalAccountId = externalAccountId;
        return this;
    }
}