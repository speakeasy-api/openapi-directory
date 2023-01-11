package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasehostingSitesVersionsCloneRequest {
    public FirebasehostingSitesVersionsClonePathParams pathParams;
    public FirebasehostingSitesVersionsCloneRequest withPathParams(FirebasehostingSitesVersionsClonePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebasehostingSitesVersionsCloneQueryParams queryParams;
    public FirebasehostingSitesVersionsCloneRequest withQueryParams(FirebasehostingSitesVersionsCloneQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CloneVersionRequest request;
    public FirebasehostingSitesVersionsCloneRequest withRequest(openapisdk.models.shared.CloneVersionRequest request) {
        this.request = request;
        return this;
    }
    public FirebasehostingSitesVersionsCloneSecurity security;
    public FirebasehostingSitesVersionsCloneRequest withSecurity(FirebasehostingSitesVersionsCloneSecurity security) {
        this.security = security;
        return this;
    }
}