package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenRequest {
    public FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenPathParams pathParams;
    public FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenRequest withPathParams(FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenQueryParams queryParams;
    public FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenRequest withQueryParams(FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1betaExchangePlayIntegrityTokenRequest request;
    public FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenRequest withRequest(openapisdk.models.shared.GoogleFirebaseAppcheckV1betaExchangePlayIntegrityTokenRequest request) {
        this.request = request;
        return this;
    }
    public FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurity security;
    public FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenRequest withSecurity(FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurity security) {
        this.security = security;
        return this;
    }
}