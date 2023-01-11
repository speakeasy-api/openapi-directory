package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ForgotPasswordOneTimeCodeRequest {
    public ForgotPasswordOneTimeCodePathParams pathParams;
    public ForgotPasswordOneTimeCodeRequest withPathParams(ForgotPasswordOneTimeCodePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ForgotPasswordOneTimeCodeQueryParams queryParams;
    public ForgotPasswordOneTimeCodeRequest withQueryParams(ForgotPasswordOneTimeCodeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/plain")
    public byte[] request;
    public ForgotPasswordOneTimeCodeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}