package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ParseShipmentRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ParseShipmentRequestBodyInput request;
    public ParseShipmentRequest withRequest(openapisdk.models.shared.ParseShipmentRequestBodyInput request) {
        this.request = request;
        return this;
    }
}