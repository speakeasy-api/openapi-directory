package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPaymentsForPayoutV4PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payoutId")
    public String payoutId;
    public GetPaymentsForPayoutV4PathParams withPayoutId(String payoutId) {
        this.payoutId = payoutId;
        return this;
    }
}