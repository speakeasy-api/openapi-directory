package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseProjectsAndroidAppsCreateRequest {
    public FirebaseProjectsAndroidAppsCreatePathParams pathParams;
    public FirebaseProjectsAndroidAppsCreateRequest withPathParams(FirebaseProjectsAndroidAppsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebaseProjectsAndroidAppsCreateQueryParams queryParams;
    public FirebaseProjectsAndroidAppsCreateRequest withQueryParams(FirebaseProjectsAndroidAppsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AndroidAppInput request;
    public FirebaseProjectsAndroidAppsCreateRequest withRequest(openapisdk.models.shared.AndroidAppInput request) {
        this.request = request;
        return this;
    }
    public FirebaseProjectsAndroidAppsCreateSecurity security;
    public FirebaseProjectsAndroidAppsCreateRequest withSecurity(FirebaseProjectsAndroidAppsCreateSecurity security) {
        this.security = security;
        return this;
    }
}