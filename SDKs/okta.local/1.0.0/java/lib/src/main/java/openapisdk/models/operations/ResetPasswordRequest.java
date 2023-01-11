package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResetPasswordRequest {
    public ResetPasswordPathParams pathParams;
    public ResetPasswordRequest withPathParams(ResetPasswordPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ResetPasswordQueryParams queryParams;
    public ResetPasswordRequest withQueryParams(ResetPasswordQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/plain")
    public byte[] request;
    public ResetPasswordRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}