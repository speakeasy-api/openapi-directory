package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseappcheckProjectsAppsExchangeCustomTokenRequest {
    public FirebaseappcheckProjectsAppsExchangeCustomTokenPathParams pathParams;
    public FirebaseappcheckProjectsAppsExchangeCustomTokenRequest withPathParams(FirebaseappcheckProjectsAppsExchangeCustomTokenPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebaseappcheckProjectsAppsExchangeCustomTokenQueryParams queryParams;
    public FirebaseappcheckProjectsAppsExchangeCustomTokenRequest withQueryParams(FirebaseappcheckProjectsAppsExchangeCustomTokenQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1betaExchangeCustomTokenRequest request;
    public FirebaseappcheckProjectsAppsExchangeCustomTokenRequest withRequest(openapisdk.models.shared.GoogleFirebaseAppcheckV1betaExchangeCustomTokenRequest request) {
        this.request = request;
        return this;
    }
    public FirebaseappcheckProjectsAppsExchangeCustomTokenSecurity security;
    public FirebaseappcheckProjectsAppsExchangeCustomTokenRequest withSecurity(FirebaseappcheckProjectsAppsExchangeCustomTokenSecurity security) {
        this.security = security;
        return this;
    }
}