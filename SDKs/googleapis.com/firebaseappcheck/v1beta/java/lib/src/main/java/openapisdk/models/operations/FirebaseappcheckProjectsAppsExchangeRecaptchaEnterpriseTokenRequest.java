package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenRequest {
    public FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenPathParams pathParams;
    public FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenRequest withPathParams(FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenQueryParams queryParams;
    public FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenRequest withQueryParams(FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1betaExchangeRecaptchaEnterpriseTokenRequest request;
    public FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenRequest withRequest(openapisdk.models.shared.GoogleFirebaseAppcheckV1betaExchangeRecaptchaEnterpriseTokenRequest request) {
        this.request = request;
        return this;
    }
    public FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurity security;
    public FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenRequest withSecurity(FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurity security) {
        this.security = security;
        return this;
    }
}