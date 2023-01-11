package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResetFactorsRequest {
    public ResetFactorsPathParams pathParams;
    public ResetFactorsRequest withPathParams(ResetFactorsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/octet-stream")
    public byte[] request;
    public ResetFactorsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}