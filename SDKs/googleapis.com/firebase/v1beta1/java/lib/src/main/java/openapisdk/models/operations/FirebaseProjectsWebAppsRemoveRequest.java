package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseProjectsWebAppsRemoveRequest {
    public FirebaseProjectsWebAppsRemovePathParams pathParams;
    public FirebaseProjectsWebAppsRemoveRequest withPathParams(FirebaseProjectsWebAppsRemovePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebaseProjectsWebAppsRemoveQueryParams queryParams;
    public FirebaseProjectsWebAppsRemoveRequest withQueryParams(FirebaseProjectsWebAppsRemoveQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RemoveWebAppRequest request;
    public FirebaseProjectsWebAppsRemoveRequest withRequest(openapisdk.models.shared.RemoveWebAppRequest request) {
        this.request = request;
        return this;
    }
    public FirebaseProjectsWebAppsRemoveSecurity security;
    public FirebaseProjectsWebAppsRemoveRequest withSecurity(FirebaseProjectsWebAppsRemoveSecurity security) {
        this.security = security;
        return this;
    }
}