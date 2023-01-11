package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchAttractionRequest {
    public PatchAttractionPathParams pathParams;
    public PatchAttractionRequest withPathParams(PatchAttractionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatchAttractionHeaders headers;
    public PatchAttractionRequest withHeaders(PatchAttractionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AugmentationData request;
    public PatchAttractionRequest withRequest(openapisdk.models.shared.AugmentationData request) {
        this.request = request;
        return this;
    }
}