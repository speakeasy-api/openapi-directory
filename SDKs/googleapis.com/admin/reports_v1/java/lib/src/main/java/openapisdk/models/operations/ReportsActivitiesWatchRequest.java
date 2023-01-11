package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReportsActivitiesWatchRequest {
    public ReportsActivitiesWatchPathParams pathParams;
    public ReportsActivitiesWatchRequest withPathParams(ReportsActivitiesWatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReportsActivitiesWatchQueryParams queryParams;
    public ReportsActivitiesWatchRequest withQueryParams(ReportsActivitiesWatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Channel request;
    public ReportsActivitiesWatchRequest withRequest(openapisdk.models.shared.Channel request) {
        this.request = request;
        return this;
    }
    public ReportsActivitiesWatchSecurity security;
    public ReportsActivitiesWatchRequest withSecurity(ReportsActivitiesWatchSecurity security) {
        this.security = security;
        return this;
    }
}