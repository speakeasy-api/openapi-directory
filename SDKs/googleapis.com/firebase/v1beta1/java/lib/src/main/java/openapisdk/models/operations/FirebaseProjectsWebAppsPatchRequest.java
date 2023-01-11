package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseProjectsWebAppsPatchRequest {
    public FirebaseProjectsWebAppsPatchPathParams pathParams;
    public FirebaseProjectsWebAppsPatchRequest withPathParams(FirebaseProjectsWebAppsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebaseProjectsWebAppsPatchQueryParams queryParams;
    public FirebaseProjectsWebAppsPatchRequest withQueryParams(FirebaseProjectsWebAppsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WebAppInput request;
    public FirebaseProjectsWebAppsPatchRequest withRequest(openapisdk.models.shared.WebAppInput request) {
        this.request = request;
        return this;
    }
    public FirebaseProjectsWebAppsPatchSecurity security;
    public FirebaseProjectsWebAppsPatchRequest withSecurity(FirebaseProjectsWebAppsPatchSecurity security) {
        this.security = security;
        return this;
    }
}