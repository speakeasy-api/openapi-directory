package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePaymentMethodRequestBody {
    @SpeakeasyMetadata("form:name=active")
    public Boolean active;
    public UpdatePaymentMethodRequestBody withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @SpeakeasyMetadata("form:name=paypal.subject")
    public String paypalSubject;
    public UpdatePaymentMethodRequestBody withPaypalSubject(String paypalSubject) {
        this.paypalSubject = paypalSubject;
        return this;
    }
}