package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsadminAccountsSearchChangeHistoryEventsRequest {
    public AnalyticsadminAccountsSearchChangeHistoryEventsPathParams pathParams;
    public AnalyticsadminAccountsSearchChangeHistoryEventsRequest withPathParams(AnalyticsadminAccountsSearchChangeHistoryEventsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsadminAccountsSearchChangeHistoryEventsQueryParams queryParams;
    public AnalyticsadminAccountsSearchChangeHistoryEventsRequest withQueryParams(AnalyticsadminAccountsSearchChangeHistoryEventsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest request;
    public AnalyticsadminAccountsSearchChangeHistoryEventsRequest withRequest(openapisdk.models.shared.GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest request) {
        this.request = request;
        return this;
    }
    public AnalyticsadminAccountsSearchChangeHistoryEventsSecurity security;
    public AnalyticsadminAccountsSearchChangeHistoryEventsRequest withSecurity(AnalyticsadminAccountsSearchChangeHistoryEventsSecurity security) {
        this.security = security;
        return this;
    }
}