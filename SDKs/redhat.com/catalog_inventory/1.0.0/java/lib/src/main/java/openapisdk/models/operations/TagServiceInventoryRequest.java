package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagServiceInventoryRequest {
    public TagServiceInventoryPathParams pathParams;
    public TagServiceInventoryRequest withPathParams(TagServiceInventoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Tag[] request;
    public TagServiceInventoryRequest withRequest(openapisdk.models.shared.Tag[] request) {
        this.request = request;
        return this;
    }
}