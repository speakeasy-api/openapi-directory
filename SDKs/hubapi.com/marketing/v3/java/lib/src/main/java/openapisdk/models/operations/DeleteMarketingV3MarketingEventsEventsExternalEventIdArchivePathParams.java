package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteMarketingV3MarketingEventsEventsExternalEventIdArchivePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=externalEventId")
    public String externalEventId;
    public DeleteMarketingV3MarketingEventsEventsExternalEventIdArchivePathParams withExternalEventId(String externalEventId) {
        this.externalEventId = externalEventId;
        return this;
    }
}