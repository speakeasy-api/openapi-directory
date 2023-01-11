package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UntagServiceInventoryRequest {
    public UntagServiceInventoryPathParams pathParams;
    public UntagServiceInventoryRequest withPathParams(UntagServiceInventoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Tag[] request;
    public UntagServiceInventoryRequest withRequest(openapisdk.models.shared.Tag[] request) {
        this.request = request;
        return this;
    }
}