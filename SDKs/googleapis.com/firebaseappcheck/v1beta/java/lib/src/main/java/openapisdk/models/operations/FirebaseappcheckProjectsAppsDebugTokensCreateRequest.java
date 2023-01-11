package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseappcheckProjectsAppsDebugTokensCreateRequest {
    public FirebaseappcheckProjectsAppsDebugTokensCreatePathParams pathParams;
    public FirebaseappcheckProjectsAppsDebugTokensCreateRequest withPathParams(FirebaseappcheckProjectsAppsDebugTokensCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebaseappcheckProjectsAppsDebugTokensCreateQueryParams queryParams;
    public FirebaseappcheckProjectsAppsDebugTokensCreateRequest withQueryParams(FirebaseappcheckProjectsAppsDebugTokensCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1betaDebugToken request;
    public FirebaseappcheckProjectsAppsDebugTokensCreateRequest withRequest(openapisdk.models.shared.GoogleFirebaseAppcheckV1betaDebugToken request) {
        this.request = request;
        return this;
    }
    public FirebaseappcheckProjectsAppsDebugTokensCreateSecurity security;
    public FirebaseappcheckProjectsAppsDebugTokensCreateRequest withSecurity(FirebaseappcheckProjectsAppsDebugTokensCreateSecurity security) {
        this.security = security;
        return this;
    }
}