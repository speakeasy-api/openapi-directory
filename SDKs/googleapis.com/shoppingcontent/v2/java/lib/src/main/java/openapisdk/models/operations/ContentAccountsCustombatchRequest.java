package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentAccountsCustombatchRequest {
    public ContentAccountsCustombatchQueryParams queryParams;
    public ContentAccountsCustombatchRequest withQueryParams(ContentAccountsCustombatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AccountsCustomBatchRequest request;
    public ContentAccountsCustombatchRequest withRequest(openapisdk.models.shared.AccountsCustomBatchRequest request) {
        this.request = request;
        return this;
    }
    public ContentAccountsCustombatchSecurity security;
    public ContentAccountsCustombatchRequest withSecurity(ContentAccountsCustombatchSecurity security) {
        this.security = security;
        return this;
    }
}