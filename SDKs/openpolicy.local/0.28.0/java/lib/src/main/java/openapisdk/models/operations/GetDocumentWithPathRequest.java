package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDocumentWithPathRequest {
    public GetDocumentWithPathPathParams pathParams;
    public GetDocumentWithPathRequest withPathParams(GetDocumentWithPathPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDocumentWithPathQueryParams queryParams;
    public GetDocumentWithPathRequest withQueryParams(GetDocumentWithPathQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-yaml")
    public byte[] request;
    public GetDocumentWithPathRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}