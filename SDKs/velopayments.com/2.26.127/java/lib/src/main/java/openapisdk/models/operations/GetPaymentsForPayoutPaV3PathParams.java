package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPaymentsForPayoutPaV3PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payoutId")
    public String payoutId;
    public GetPaymentsForPayoutPaV3PathParams withPayoutId(String payoutId) {
        this.payoutId = payoutId;
        return this;
    }
}