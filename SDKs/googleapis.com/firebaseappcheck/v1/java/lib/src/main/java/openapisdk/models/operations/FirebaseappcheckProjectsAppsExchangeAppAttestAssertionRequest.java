package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseappcheckProjectsAppsExchangeAppAttestAssertionRequest {
    public FirebaseappcheckProjectsAppsExchangeAppAttestAssertionPathParams pathParams;
    public FirebaseappcheckProjectsAppsExchangeAppAttestAssertionRequest withPathParams(FirebaseappcheckProjectsAppsExchangeAppAttestAssertionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebaseappcheckProjectsAppsExchangeAppAttestAssertionQueryParams queryParams;
    public FirebaseappcheckProjectsAppsExchangeAppAttestAssertionRequest withQueryParams(FirebaseappcheckProjectsAppsExchangeAppAttestAssertionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest request;
    public FirebaseappcheckProjectsAppsExchangeAppAttestAssertionRequest withRequest(openapisdk.models.shared.GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest request) {
        this.request = request;
        return this;
    }
    public FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurity security;
    public FirebaseappcheckProjectsAppsExchangeAppAttestAssertionRequest withSecurity(FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurity security) {
        this.security = security;
        return this;
    }
}