package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebmastersSearchanalyticsQueryRequest {
    public WebmastersSearchanalyticsQueryPathParams pathParams;
    public WebmastersSearchanalyticsQueryRequest withPathParams(WebmastersSearchanalyticsQueryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WebmastersSearchanalyticsQueryQueryParams queryParams;
    public WebmastersSearchanalyticsQueryRequest withQueryParams(WebmastersSearchanalyticsQueryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SearchAnalyticsQueryRequest request;
    public WebmastersSearchanalyticsQueryRequest withRequest(openapisdk.models.shared.SearchAnalyticsQueryRequest request) {
        this.request = request;
        return this;
    }
    public WebmastersSearchanalyticsQuerySecurity security;
    public WebmastersSearchanalyticsQueryRequest withSecurity(WebmastersSearchanalyticsQuerySecurity security) {
        this.security = security;
        return this;
    }
}