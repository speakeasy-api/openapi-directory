package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasedatabaseProjectsLocationsInstancesDisableRequest {
    public FirebasedatabaseProjectsLocationsInstancesDisablePathParams pathParams;
    public FirebasedatabaseProjectsLocationsInstancesDisableRequest withPathParams(FirebasedatabaseProjectsLocationsInstancesDisablePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebasedatabaseProjectsLocationsInstancesDisableQueryParams queryParams;
    public FirebasedatabaseProjectsLocationsInstancesDisableRequest withQueryParams(FirebasedatabaseProjectsLocationsInstancesDisableQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public FirebasedatabaseProjectsLocationsInstancesDisableRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public FirebasedatabaseProjectsLocationsInstancesDisableSecurity security;
    public FirebasedatabaseProjectsLocationsInstancesDisableRequest withSecurity(FirebasedatabaseProjectsLocationsInstancesDisableSecurity security) {
        this.security = security;
        return this;
    }
}