package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WithdrawPaymentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=paymentId")
    public String paymentId;
    public WithdrawPaymentPathParams withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
}