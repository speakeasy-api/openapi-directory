package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenRequest {
    public FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenPathParams pathParams;
    public FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenRequest withPathParams(FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenQueryParams queryParams;
    public FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenRequest withQueryParams(FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest request;
    public FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenRequest withRequest(openapisdk.models.shared.GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest request) {
        this.request = request;
        return this;
    }
    public FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurity security;
    public FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenRequest withSecurity(FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurity security) {
        this.security = security;
        return this;
    }
}