package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseappcheckProjectsAppsExchangeRecaptchaTokenRequest {
    public FirebaseappcheckProjectsAppsExchangeRecaptchaTokenPathParams pathParams;
    public FirebaseappcheckProjectsAppsExchangeRecaptchaTokenRequest withPathParams(FirebaseappcheckProjectsAppsExchangeRecaptchaTokenPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebaseappcheckProjectsAppsExchangeRecaptchaTokenQueryParams queryParams;
    public FirebaseappcheckProjectsAppsExchangeRecaptchaTokenRequest withQueryParams(FirebaseappcheckProjectsAppsExchangeRecaptchaTokenQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequest request;
    public FirebaseappcheckProjectsAppsExchangeRecaptchaTokenRequest withRequest(openapisdk.models.shared.GoogleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequest request) {
        this.request = request;
        return this;
    }
    public FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurity security;
    public FirebaseappcheckProjectsAppsExchangeRecaptchaTokenRequest withSecurity(FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurity security) {
        this.security = security;
        return this;
    }
}