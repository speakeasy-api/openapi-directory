package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateShipmentsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateShipmentsRequestBodyInput request;
    public CreateShipmentsRequest withRequest(openapisdk.models.shared.CreateShipmentsRequestBodyInput request) {
        this.request = request;
        return this;
    }
}