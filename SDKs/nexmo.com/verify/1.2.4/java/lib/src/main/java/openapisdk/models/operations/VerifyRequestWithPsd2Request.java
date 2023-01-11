package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VerifyRequestWithPsd2Request {
    public VerifyRequestWithPsd2PathParams pathParams;
    public VerifyRequestWithPsd2Request withPathParams(VerifyRequestWithPsd2PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public openapisdk.models.shared.Psd2Request request;
    public VerifyRequestWithPsd2Request withRequest(openapisdk.models.shared.Psd2Request request) {
        this.request = request;
        return this;
    }
}