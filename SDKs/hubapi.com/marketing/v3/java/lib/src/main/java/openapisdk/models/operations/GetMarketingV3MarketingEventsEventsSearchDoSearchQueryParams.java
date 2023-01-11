package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMarketingV3MarketingEventsEventsSearchDoSearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public GetMarketingV3MarketingEventsEventsSearchDoSearchQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
}