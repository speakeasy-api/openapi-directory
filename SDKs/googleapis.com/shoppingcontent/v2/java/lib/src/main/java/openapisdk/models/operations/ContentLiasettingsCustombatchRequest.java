package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentLiasettingsCustombatchRequest {
    public ContentLiasettingsCustombatchQueryParams queryParams;
    public ContentLiasettingsCustombatchRequest withQueryParams(ContentLiasettingsCustombatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LiasettingsCustomBatchRequest request;
    public ContentLiasettingsCustombatchRequest withRequest(openapisdk.models.shared.LiasettingsCustomBatchRequest request) {
        this.request = request;
        return this;
    }
    public ContentLiasettingsCustombatchSecurity security;
    public ContentLiasettingsCustombatchRequest withSecurity(ContentLiasettingsCustombatchSecurity security) {
        this.security = security;
        return this;
    }
}