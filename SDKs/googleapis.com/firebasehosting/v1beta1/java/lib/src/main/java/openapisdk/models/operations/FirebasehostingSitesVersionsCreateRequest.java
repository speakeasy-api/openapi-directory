package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasehostingSitesVersionsCreateRequest {
    public FirebasehostingSitesVersionsCreatePathParams pathParams;
    public FirebasehostingSitesVersionsCreateRequest withPathParams(FirebasehostingSitesVersionsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebasehostingSitesVersionsCreateQueryParams queryParams;
    public FirebasehostingSitesVersionsCreateRequest withQueryParams(FirebasehostingSitesVersionsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Version request;
    public FirebasehostingSitesVersionsCreateRequest withRequest(openapisdk.models.shared.Version request) {
        this.request = request;
        return this;
    }
    public FirebasehostingSitesVersionsCreateSecurity security;
    public FirebasehostingSitesVersionsCreateRequest withSecurity(FirebasehostingSitesVersionsCreateSecurity security) {
        this.security = security;
        return this;
    }
}