package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TexttospeechOperationsCancelRequest {
    public TexttospeechOperationsCancelPathParams pathParams;
    public TexttospeechOperationsCancelRequest withPathParams(TexttospeechOperationsCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TexttospeechOperationsCancelQueryParams queryParams;
    public TexttospeechOperationsCancelRequest withQueryParams(TexttospeechOperationsCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public TexttospeechOperationsCancelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public TexttospeechOperationsCancelSecurity security;
    public TexttospeechOperationsCancelRequest withSecurity(TexttospeechOperationsCancelSecurity security) {
        this.security = security;
        return this;
    }
}