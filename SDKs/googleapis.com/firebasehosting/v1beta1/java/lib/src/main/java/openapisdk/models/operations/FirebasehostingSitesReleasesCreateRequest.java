package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasehostingSitesReleasesCreateRequest {
    public FirebasehostingSitesReleasesCreatePathParams pathParams;
    public FirebasehostingSitesReleasesCreateRequest withPathParams(FirebasehostingSitesReleasesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebasehostingSitesReleasesCreateQueryParams queryParams;
    public FirebasehostingSitesReleasesCreateRequest withQueryParams(FirebasehostingSitesReleasesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Release request;
    public FirebasehostingSitesReleasesCreateRequest withRequest(openapisdk.models.shared.Release request) {
        this.request = request;
        return this;
    }
    public FirebasehostingSitesReleasesCreateSecurity security;
    public FirebasehostingSitesReleasesCreateRequest withSecurity(FirebasehostingSitesReleasesCreateSecurity security) {
        this.security = security;
        return this;
    }
}