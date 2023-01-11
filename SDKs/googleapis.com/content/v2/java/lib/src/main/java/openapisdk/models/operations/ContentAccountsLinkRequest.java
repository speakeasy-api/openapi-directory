package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentAccountsLinkRequest {
    public ContentAccountsLinkPathParams pathParams;
    public ContentAccountsLinkRequest withPathParams(ContentAccountsLinkPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentAccountsLinkQueryParams queryParams;
    public ContentAccountsLinkRequest withQueryParams(ContentAccountsLinkQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AccountsLinkRequest request;
    public ContentAccountsLinkRequest withRequest(openapisdk.models.shared.AccountsLinkRequest request) {
        this.request = request;
        return this;
    }
    public ContentAccountsLinkSecurity security;
    public ContentAccountsLinkRequest withSecurity(ContentAccountsLinkSecurity security) {
        this.security = security;
        return this;
    }
}