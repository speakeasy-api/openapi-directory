package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseappcheckProjectsAppsExchangeDebugTokenRequest {
    public FirebaseappcheckProjectsAppsExchangeDebugTokenPathParams pathParams;
    public FirebaseappcheckProjectsAppsExchangeDebugTokenRequest withPathParams(FirebaseappcheckProjectsAppsExchangeDebugTokenPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebaseappcheckProjectsAppsExchangeDebugTokenQueryParams queryParams;
    public FirebaseappcheckProjectsAppsExchangeDebugTokenRequest withQueryParams(FirebaseappcheckProjectsAppsExchangeDebugTokenQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1ExchangeDebugTokenRequest request;
    public FirebaseappcheckProjectsAppsExchangeDebugTokenRequest withRequest(openapisdk.models.shared.GoogleFirebaseAppcheckV1ExchangeDebugTokenRequest request) {
        this.request = request;
        return this;
    }
    public FirebaseappcheckProjectsAppsExchangeDebugTokenSecurity security;
    public FirebaseappcheckProjectsAppsExchangeDebugTokenRequest withSecurity(FirebaseappcheckProjectsAppsExchangeDebugTokenSecurity security) {
        this.security = security;
        return this;
    }
}