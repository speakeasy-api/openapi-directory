package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasehostingSitesVersionsPatchRequest {
    public FirebasehostingSitesVersionsPatchPathParams pathParams;
    public FirebasehostingSitesVersionsPatchRequest withPathParams(FirebasehostingSitesVersionsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebasehostingSitesVersionsPatchQueryParams queryParams;
    public FirebasehostingSitesVersionsPatchRequest withQueryParams(FirebasehostingSitesVersionsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Version request;
    public FirebasehostingSitesVersionsPatchRequest withRequest(openapisdk.models.shared.Version request) {
        this.request = request;
        return this;
    }
    public FirebasehostingSitesVersionsPatchSecurity security;
    public FirebasehostingSitesVersionsPatchRequest withSecurity(FirebasehostingSitesVersionsPatchSecurity security) {
        this.security = security;
        return this;
    }
}