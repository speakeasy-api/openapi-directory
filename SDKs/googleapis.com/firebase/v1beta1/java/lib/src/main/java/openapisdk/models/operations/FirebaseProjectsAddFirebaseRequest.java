package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseProjectsAddFirebaseRequest {
    public FirebaseProjectsAddFirebasePathParams pathParams;
    public FirebaseProjectsAddFirebaseRequest withPathParams(FirebaseProjectsAddFirebasePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebaseProjectsAddFirebaseQueryParams queryParams;
    public FirebaseProjectsAddFirebaseRequest withQueryParams(FirebaseProjectsAddFirebaseQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddFirebaseRequest request;
    public FirebaseProjectsAddFirebaseRequest withRequest(openapisdk.models.shared.AddFirebaseRequest request) {
        this.request = request;
        return this;
    }
    public FirebaseProjectsAddFirebaseSecurity security;
    public FirebaseProjectsAddFirebaseRequest withSecurity(FirebaseProjectsAddFirebaseSecurity security) {
        this.security = security;
        return this;
    }
}