package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayoutSummaryV3PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payoutId")
    public String payoutId;
    public GetPayoutSummaryV3PathParams withPayoutId(String payoutId) {
        this.payoutId = payoutId;
        return this;
    }
}