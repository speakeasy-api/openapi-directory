package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasehostingProjectsSitesCreateRequest {
    public FirebasehostingProjectsSitesCreatePathParams pathParams;
    public FirebasehostingProjectsSitesCreateRequest withPathParams(FirebasehostingProjectsSitesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebasehostingProjectsSitesCreateQueryParams queryParams;
    public FirebasehostingProjectsSitesCreateRequest withQueryParams(FirebasehostingProjectsSitesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SiteInput request;
    public FirebasehostingProjectsSitesCreateRequest withRequest(openapisdk.models.shared.SiteInput request) {
        this.request = request;
        return this;
    }
    public FirebasehostingProjectsSitesCreateSecurity security;
    public FirebasehostingProjectsSitesCreateRequest withSecurity(FirebasehostingProjectsSitesCreateSecurity security) {
        this.security = security;
        return this;
    }
}