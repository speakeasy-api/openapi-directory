package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VerifyCheckRequest {
    public VerifyCheckPathParams pathParams;
    public VerifyCheckRequest withPathParams(VerifyCheckPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public openapisdk.models.shared.CheckRequest request;
    public VerifyCheckRequest withRequest(openapisdk.models.shared.CheckRequest request) {
        this.request = request;
        return this;
    }
}