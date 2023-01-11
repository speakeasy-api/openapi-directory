package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentAccountstatusesCustombatchRequest {
    public ContentAccountstatusesCustombatchQueryParams queryParams;
    public ContentAccountstatusesCustombatchRequest withQueryParams(ContentAccountstatusesCustombatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AccountstatusesCustomBatchRequest request;
    public ContentAccountstatusesCustombatchRequest withRequest(openapisdk.models.shared.AccountstatusesCustomBatchRequest request) {
        this.request = request;
        return this;
    }
    public ContentAccountstatusesCustombatchSecurity security;
    public ContentAccountstatusesCustombatchRequest withSecurity(ContentAccountstatusesCustombatchSecurity security) {
        this.security = security;
        return this;
    }
}