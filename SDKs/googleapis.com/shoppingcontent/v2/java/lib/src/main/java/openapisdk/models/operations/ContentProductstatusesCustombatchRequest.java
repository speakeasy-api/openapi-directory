package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentProductstatusesCustombatchRequest {
    public ContentProductstatusesCustombatchQueryParams queryParams;
    public ContentProductstatusesCustombatchRequest withQueryParams(ContentProductstatusesCustombatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProductstatusesCustomBatchRequest request;
    public ContentProductstatusesCustombatchRequest withRequest(openapisdk.models.shared.ProductstatusesCustomBatchRequest request) {
        this.request = request;
        return this;
    }
    public ContentProductstatusesCustombatchSecurity security;
    public ContentProductstatusesCustombatchRequest withSecurity(ContentProductstatusesCustombatchSecurity security) {
        this.security = security;
        return this;
    }
}