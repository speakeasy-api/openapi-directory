package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPaymentMethodPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=paymentMethodNumber")
    public String paymentMethodNumber;
    public GetPaymentMethodPathParams withPaymentMethodNumber(String paymentMethodNumber) {
        this.paymentMethodNumber = paymentMethodNumber;
        return this;
    }
}