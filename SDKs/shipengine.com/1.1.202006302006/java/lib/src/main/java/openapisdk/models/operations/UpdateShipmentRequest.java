package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateShipmentRequest {
    public UpdateShipmentPathParams pathParams;
    public UpdateShipmentRequest withPathParams(UpdateShipmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateShipmentRequestBodyInput request;
    public UpdateShipmentRequest withRequest(openapisdk.models.shared.UpdateShipmentRequestBodyInput request) {
        this.request = request;
        return this;
    }
}