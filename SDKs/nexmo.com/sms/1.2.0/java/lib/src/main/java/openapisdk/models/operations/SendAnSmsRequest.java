package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendAnSmsRequest {
    public SendAnSmsPathParams pathParams;
    public SendAnSmsRequest withPathParams(SendAnSmsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public Object request;
    public SendAnSmsRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}