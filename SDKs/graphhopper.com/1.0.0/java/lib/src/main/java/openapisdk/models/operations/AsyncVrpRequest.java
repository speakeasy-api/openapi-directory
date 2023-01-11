package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AsyncVrpRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Request request;
    public AsyncVrpRequest withRequest(openapisdk.models.shared.Request request) {
        this.request = request;
        return this;
    }
}