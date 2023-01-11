package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLabelFromShipmentRequest {
    public CreateLabelFromShipmentPathParams pathParams;
    public CreateLabelFromShipmentRequest withPathParams(CreateLabelFromShipmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateLabelFromShipmentRequestBody request;
    public CreateLabelFromShipmentRequest withRequest(openapisdk.models.shared.CreateLabelFromShipmentRequestBody request) {
        this.request = request;
        return this;
    }
}