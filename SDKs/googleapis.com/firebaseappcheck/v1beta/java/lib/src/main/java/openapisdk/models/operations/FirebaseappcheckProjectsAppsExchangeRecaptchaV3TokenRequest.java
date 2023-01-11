package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenRequest {
    public FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenPathParams pathParams;
    public FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenRequest withPathParams(FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenQueryParams queryParams;
    public FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenRequest withQueryParams(FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1betaExchangeRecaptchaV3TokenRequest request;
    public FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenRequest withRequest(openapisdk.models.shared.GoogleFirebaseAppcheckV1betaExchangeRecaptchaV3TokenRequest request) {
        this.request = request;
        return this;
    }
    public FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurity security;
    public FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenRequest withSecurity(FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurity security) {
        this.security = security;
        return this;
    }
}