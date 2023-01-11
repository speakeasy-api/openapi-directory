package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasGraphsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableGraphInput request;
    public ExtrasGraphsCreateRequest withRequest(openapisdk.models.shared.WritableGraphInput request) {
        this.request = request;
        return this;
    }
}