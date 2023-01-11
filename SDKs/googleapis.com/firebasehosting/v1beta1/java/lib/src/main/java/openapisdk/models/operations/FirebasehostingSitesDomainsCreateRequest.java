package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasehostingSitesDomainsCreateRequest {
    public FirebasehostingSitesDomainsCreatePathParams pathParams;
    public FirebasehostingSitesDomainsCreateRequest withPathParams(FirebasehostingSitesDomainsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebasehostingSitesDomainsCreateQueryParams queryParams;
    public FirebasehostingSitesDomainsCreateRequest withQueryParams(FirebasehostingSitesDomainsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Domain request;
    public FirebasehostingSitesDomainsCreateRequest withRequest(openapisdk.models.shared.Domain request) {
        this.request = request;
        return this;
    }
    public FirebasehostingSitesDomainsCreateSecurity security;
    public FirebasehostingSitesDomainsCreateRequest withSecurity(FirebasehostingSitesDomainsCreateSecurity security) {
        this.security = security;
        return this;
    }
}