package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasehostingSitesDomainsUpdateRequest {
    public FirebasehostingSitesDomainsUpdatePathParams pathParams;
    public FirebasehostingSitesDomainsUpdateRequest withPathParams(FirebasehostingSitesDomainsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebasehostingSitesDomainsUpdateQueryParams queryParams;
    public FirebasehostingSitesDomainsUpdateRequest withQueryParams(FirebasehostingSitesDomainsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Domain request;
    public FirebasehostingSitesDomainsUpdateRequest withRequest(openapisdk.models.shared.Domain request) {
        this.request = request;
        return this;
    }
    public FirebasehostingSitesDomainsUpdateSecurity security;
    public FirebasehostingSitesDomainsUpdateRequest withSecurity(FirebasehostingSitesDomainsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}