package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseProjectsRemoveAnalyticsRequest {
    public FirebaseProjectsRemoveAnalyticsPathParams pathParams;
    public FirebaseProjectsRemoveAnalyticsRequest withPathParams(FirebaseProjectsRemoveAnalyticsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebaseProjectsRemoveAnalyticsQueryParams queryParams;
    public FirebaseProjectsRemoveAnalyticsRequest withQueryParams(FirebaseProjectsRemoveAnalyticsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RemoveAnalyticsRequest request;
    public FirebaseProjectsRemoveAnalyticsRequest withRequest(openapisdk.models.shared.RemoveAnalyticsRequest request) {
        this.request = request;
        return this;
    }
    public FirebaseProjectsRemoveAnalyticsSecurity security;
    public FirebaseProjectsRemoveAnalyticsRequest withSecurity(FirebaseProjectsRemoveAnalyticsSecurity security) {
        this.security = security;
        return this;
    }
}