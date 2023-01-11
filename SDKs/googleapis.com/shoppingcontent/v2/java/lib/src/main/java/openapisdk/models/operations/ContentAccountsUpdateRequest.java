package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentAccountsUpdateRequest {
    public ContentAccountsUpdatePathParams pathParams;
    public ContentAccountsUpdateRequest withPathParams(ContentAccountsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentAccountsUpdateQueryParams queryParams;
    public ContentAccountsUpdateRequest withQueryParams(ContentAccountsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Account request;
    public ContentAccountsUpdateRequest withRequest(openapisdk.models.shared.Account request) {
        this.request = request;
        return this;
    }
    public ContentAccountsUpdateSecurity security;
    public ContentAccountsUpdateRequest withSecurity(ContentAccountsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}