package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseProjectsWebAppsCreateRequest {
    public FirebaseProjectsWebAppsCreatePathParams pathParams;
    public FirebaseProjectsWebAppsCreateRequest withPathParams(FirebaseProjectsWebAppsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebaseProjectsWebAppsCreateQueryParams queryParams;
    public FirebaseProjectsWebAppsCreateRequest withQueryParams(FirebaseProjectsWebAppsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WebAppInput request;
    public FirebaseProjectsWebAppsCreateRequest withRequest(openapisdk.models.shared.WebAppInput request) {
        this.request = request;
        return this;
    }
    public FirebaseProjectsWebAppsCreateSecurity security;
    public FirebaseProjectsWebAppsCreateRequest withSecurity(FirebaseProjectsWebAppsCreateSecurity security) {
        this.security = security;
        return this;
    }
}