package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseProjectsAddGoogleAnalyticsRequest {
    public FirebaseProjectsAddGoogleAnalyticsPathParams pathParams;
    public FirebaseProjectsAddGoogleAnalyticsRequest withPathParams(FirebaseProjectsAddGoogleAnalyticsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebaseProjectsAddGoogleAnalyticsQueryParams queryParams;
    public FirebaseProjectsAddGoogleAnalyticsRequest withQueryParams(FirebaseProjectsAddGoogleAnalyticsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddGoogleAnalyticsRequest request;
    public FirebaseProjectsAddGoogleAnalyticsRequest withRequest(openapisdk.models.shared.AddGoogleAnalyticsRequest request) {
        this.request = request;
        return this;
    }
    public FirebaseProjectsAddGoogleAnalyticsSecurity security;
    public FirebaseProjectsAddGoogleAnalyticsRequest withSecurity(FirebaseProjectsAddGoogleAnalyticsSecurity security) {
        this.security = security;
        return this;
    }
}