package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseProjectsIosAppsCreateRequest {
    public FirebaseProjectsIosAppsCreatePathParams pathParams;
    public FirebaseProjectsIosAppsCreateRequest withPathParams(FirebaseProjectsIosAppsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebaseProjectsIosAppsCreateQueryParams queryParams;
    public FirebaseProjectsIosAppsCreateRequest withQueryParams(FirebaseProjectsIosAppsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.IosAppInput request;
    public FirebaseProjectsIosAppsCreateRequest withRequest(openapisdk.models.shared.IosAppInput request) {
        this.request = request;
        return this;
    }
    public FirebaseProjectsIosAppsCreateSecurity security;
    public FirebaseProjectsIosAppsCreateRequest withSecurity(FirebaseProjectsIosAppsCreateSecurity security) {
        this.security = security;
        return this;
    }
}