package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseappcheckProjectsAppsExchangeSafetyNetTokenRequest {
    public FirebaseappcheckProjectsAppsExchangeSafetyNetTokenPathParams pathParams;
    public FirebaseappcheckProjectsAppsExchangeSafetyNetTokenRequest withPathParams(FirebaseappcheckProjectsAppsExchangeSafetyNetTokenPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebaseappcheckProjectsAppsExchangeSafetyNetTokenQueryParams queryParams;
    public FirebaseappcheckProjectsAppsExchangeSafetyNetTokenRequest withQueryParams(FirebaseappcheckProjectsAppsExchangeSafetyNetTokenQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest request;
    public FirebaseappcheckProjectsAppsExchangeSafetyNetTokenRequest withRequest(openapisdk.models.shared.GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest request) {
        this.request = request;
        return this;
    }
    public FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurity security;
    public FirebaseappcheckProjectsAppsExchangeSafetyNetTokenRequest withSecurity(FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurity security) {
        this.security = security;
        return this;
    }
}