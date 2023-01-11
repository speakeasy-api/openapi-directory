package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentAccountsInsertRequest {
    public ContentAccountsInsertPathParams pathParams;
    public ContentAccountsInsertRequest withPathParams(ContentAccountsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentAccountsInsertQueryParams queryParams;
    public ContentAccountsInsertRequest withQueryParams(ContentAccountsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Account request;
    public ContentAccountsInsertRequest withRequest(openapisdk.models.shared.Account request) {
        this.request = request;
        return this;
    }
    public ContentAccountsInsertSecurity security;
    public ContentAccountsInsertRequest withSecurity(ContentAccountsInsertSecurity security) {
        this.security = security;
        return this;
    }
}