package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePaymentInfoRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdatePaymentInfo request;
    public UpdatePaymentInfoRequest withRequest(openapisdk.models.shared.UpdatePaymentInfo request) {
        this.request = request;
        return this;
    }
}