package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentDatafeedstatusesCustombatchRequest {
    public ContentDatafeedstatusesCustombatchQueryParams queryParams;
    public ContentDatafeedstatusesCustombatchRequest withQueryParams(ContentDatafeedstatusesCustombatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DatafeedstatusesCustomBatchRequest request;
    public ContentDatafeedstatusesCustombatchRequest withRequest(openapisdk.models.shared.DatafeedstatusesCustomBatchRequest request) {
        this.request = request;
        return this;
    }
    public ContentDatafeedstatusesCustombatchSecurity security;
    public ContentDatafeedstatusesCustombatchRequest withSecurity(ContentDatafeedstatusesCustombatchSecurity security) {
        this.security = security;
        return this;
    }
}