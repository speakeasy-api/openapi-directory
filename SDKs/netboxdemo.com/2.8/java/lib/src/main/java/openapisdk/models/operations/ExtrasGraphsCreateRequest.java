package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasGraphsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GraphInput request;
    public ExtrasGraphsCreateRequest withRequest(openapisdk.models.shared.GraphInput request) {
        this.request = request;
        return this;
    }
}