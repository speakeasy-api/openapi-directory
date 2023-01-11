package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseProjectsAndroidAppsShaCreateRequest {
    public FirebaseProjectsAndroidAppsShaCreatePathParams pathParams;
    public FirebaseProjectsAndroidAppsShaCreateRequest withPathParams(FirebaseProjectsAndroidAppsShaCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebaseProjectsAndroidAppsShaCreateQueryParams queryParams;
    public FirebaseProjectsAndroidAppsShaCreateRequest withQueryParams(FirebaseProjectsAndroidAppsShaCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ShaCertificate request;
    public FirebaseProjectsAndroidAppsShaCreateRequest withRequest(openapisdk.models.shared.ShaCertificate request) {
        this.request = request;
        return this;
    }
    public FirebaseProjectsAndroidAppsShaCreateSecurity security;
    public FirebaseProjectsAndroidAppsShaCreateRequest withSecurity(FirebaseProjectsAndroidAppsShaCreateSecurity security) {
        this.security = security;
        return this;
    }
}