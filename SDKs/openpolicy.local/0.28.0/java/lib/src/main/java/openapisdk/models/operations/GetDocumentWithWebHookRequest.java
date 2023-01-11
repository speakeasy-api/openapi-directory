package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDocumentWithWebHookRequest {
    public GetDocumentWithWebHookPathParams pathParams;
    public GetDocumentWithWebHookRequest withPathParams(GetDocumentWithWebHookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDocumentWithWebHookQueryParams queryParams;
    public GetDocumentWithWebHookRequest withQueryParams(GetDocumentWithWebHookQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-yaml")
    public byte[] request;
    public GetDocumentWithWebHookRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}