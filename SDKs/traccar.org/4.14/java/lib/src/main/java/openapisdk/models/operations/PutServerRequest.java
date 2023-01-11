package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutServerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Server request;
    public PutServerRequest withRequest(openapisdk.models.shared.Server request) {
        this.request = request;
        return this;
    }
}