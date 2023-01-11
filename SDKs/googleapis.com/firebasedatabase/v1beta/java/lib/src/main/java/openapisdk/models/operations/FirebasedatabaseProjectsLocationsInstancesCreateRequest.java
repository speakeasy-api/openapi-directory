package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasedatabaseProjectsLocationsInstancesCreateRequest {
    public FirebasedatabaseProjectsLocationsInstancesCreatePathParams pathParams;
    public FirebasedatabaseProjectsLocationsInstancesCreateRequest withPathParams(FirebasedatabaseProjectsLocationsInstancesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebasedatabaseProjectsLocationsInstancesCreateQueryParams queryParams;
    public FirebasedatabaseProjectsLocationsInstancesCreateRequest withQueryParams(FirebasedatabaseProjectsLocationsInstancesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DatabaseInstanceInput request;
    public FirebasedatabaseProjectsLocationsInstancesCreateRequest withRequest(openapisdk.models.shared.DatabaseInstanceInput request) {
        this.request = request;
        return this;
    }
    public FirebasedatabaseProjectsLocationsInstancesCreateSecurity security;
    public FirebasedatabaseProjectsLocationsInstancesCreateRequest withSecurity(FirebasedatabaseProjectsLocationsInstancesCreateSecurity security) {
        this.security = security;
        return this;
    }
}