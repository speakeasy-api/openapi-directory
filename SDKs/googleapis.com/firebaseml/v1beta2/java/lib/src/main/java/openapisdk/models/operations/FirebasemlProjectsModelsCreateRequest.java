package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasemlProjectsModelsCreateRequest {
    public FirebasemlProjectsModelsCreatePathParams pathParams;
    public FirebasemlProjectsModelsCreateRequest withPathParams(FirebasemlProjectsModelsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebasemlProjectsModelsCreateQueryParams queryParams;
    public FirebasemlProjectsModelsCreateRequest withQueryParams(FirebasemlProjectsModelsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ModelInput request;
    public FirebasemlProjectsModelsCreateRequest withRequest(openapisdk.models.shared.ModelInput request) {
        this.request = request;
        return this;
    }
    public FirebasemlProjectsModelsCreateSecurity security;
    public FirebasemlProjectsModelsCreateRequest withSecurity(FirebasemlProjectsModelsCreateSecurity security) {
        this.security = security;
        return this;
    }
}