package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchEventRequest {
    public PatchEventPathParams pathParams;
    public PatchEventRequest withPathParams(PatchEventPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatchEventHeaders headers;
    public PatchEventRequest withHeaders(PatchEventHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AugmentationData request;
    public PatchEventRequest withRequest(openapisdk.models.shared.AugmentationData request) {
        this.request = request;
        return this;
    }
}