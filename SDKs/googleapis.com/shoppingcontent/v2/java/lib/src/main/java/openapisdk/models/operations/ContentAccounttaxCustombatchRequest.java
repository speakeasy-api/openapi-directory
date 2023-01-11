package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentAccounttaxCustombatchRequest {
    public ContentAccounttaxCustombatchQueryParams queryParams;
    public ContentAccounttaxCustombatchRequest withQueryParams(ContentAccounttaxCustombatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AccounttaxCustomBatchRequest request;
    public ContentAccounttaxCustombatchRequest withRequest(openapisdk.models.shared.AccounttaxCustomBatchRequest request) {
        this.request = request;
        return this;
    }
    public ContentAccounttaxCustombatchSecurity security;
    public ContentAccounttaxCustombatchRequest withSecurity(ContentAccounttaxCustombatchSecurity security) {
        this.security = security;
        return this;
    }
}