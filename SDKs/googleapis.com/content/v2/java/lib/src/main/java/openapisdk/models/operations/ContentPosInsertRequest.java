package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentPosInsertRequest {
    public ContentPosInsertPathParams pathParams;
    public ContentPosInsertRequest withPathParams(ContentPosInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentPosInsertQueryParams queryParams;
    public ContentPosInsertRequest withQueryParams(ContentPosInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PosStore request;
    public ContentPosInsertRequest withRequest(openapisdk.models.shared.PosStore request) {
        this.request = request;
        return this;
    }
    public ContentPosInsertSecurity security;
    public ContentPosInsertRequest withSecurity(ContentPosInsertSecurity security) {
        this.security = security;
        return this;
    }
}