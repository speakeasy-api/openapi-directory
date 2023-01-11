package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWarehouseRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateWarehouseRequestBodyInput request;
    public CreateWarehouseRequest withRequest(openapisdk.models.shared.CreateWarehouseRequestBodyInput request) {
        this.request = request;
        return this;
    }
}