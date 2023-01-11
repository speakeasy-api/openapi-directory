package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePaymentMethodPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=paymentMethodNumber")
    public String paymentMethodNumber;
    public UpdatePaymentMethodPathParams withPaymentMethodNumber(String paymentMethodNumber) {
        this.paymentMethodNumber = paymentMethodNumber;
        return this;
    }
}