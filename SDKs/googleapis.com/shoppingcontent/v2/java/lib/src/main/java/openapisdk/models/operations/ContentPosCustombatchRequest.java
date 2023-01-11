package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentPosCustombatchRequest {
    public ContentPosCustombatchQueryParams queryParams;
    public ContentPosCustombatchRequest withQueryParams(ContentPosCustombatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PosCustomBatchRequest request;
    public ContentPosCustombatchRequest withRequest(openapisdk.models.shared.PosCustomBatchRequest request) {
        this.request = request;
        return this;
    }
    public ContentPosCustombatchSecurity security;
    public ContentPosCustombatchRequest withSecurity(ContentPosCustombatchSecurity security) {
        this.security = security;
        return this;
    }
}