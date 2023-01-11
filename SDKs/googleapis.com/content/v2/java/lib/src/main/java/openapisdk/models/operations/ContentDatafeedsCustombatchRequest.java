package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentDatafeedsCustombatchRequest {
    public ContentDatafeedsCustombatchQueryParams queryParams;
    public ContentDatafeedsCustombatchRequest withQueryParams(ContentDatafeedsCustombatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DatafeedsCustomBatchRequest request;
    public ContentDatafeedsCustombatchRequest withRequest(openapisdk.models.shared.DatafeedsCustomBatchRequest request) {
        this.request = request;
        return this;
    }
    public ContentDatafeedsCustombatchSecurity security;
    public ContentDatafeedsCustombatchRequest withSecurity(ContentDatafeedsCustombatchSecurity security) {
        this.security = security;
        return this;
    }
}