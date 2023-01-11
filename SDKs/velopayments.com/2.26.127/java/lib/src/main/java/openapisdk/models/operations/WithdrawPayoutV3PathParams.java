package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WithdrawPayoutV3PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payoutId")
    public String payoutId;
    public WithdrawPayoutV3PathParams withPayoutId(String payoutId) {
        this.payoutId = payoutId;
        return this;
    }
}