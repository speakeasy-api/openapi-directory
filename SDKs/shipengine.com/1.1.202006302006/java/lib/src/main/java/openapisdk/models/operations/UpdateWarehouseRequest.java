package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWarehouseRequest {
    public UpdateWarehousePathParams pathParams;
    public UpdateWarehouseRequest withPathParams(UpdateWarehousePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateWarehouseRequestBodyInput request;
    public UpdateWarehouseRequest withRequest(openapisdk.models.shared.UpdateWarehouseRequestBodyInput request) {
        this.request = request;
        return this;
    }
}