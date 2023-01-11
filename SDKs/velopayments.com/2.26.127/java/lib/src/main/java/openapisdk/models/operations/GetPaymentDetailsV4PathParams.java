package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPaymentDetailsV4PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=paymentId")
    public String paymentId;
    public GetPaymentDetailsV4PathParams withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
}