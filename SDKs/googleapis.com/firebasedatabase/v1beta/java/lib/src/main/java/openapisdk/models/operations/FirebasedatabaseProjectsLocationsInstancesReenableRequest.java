package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasedatabaseProjectsLocationsInstancesReenableRequest {
    public FirebasedatabaseProjectsLocationsInstancesReenablePathParams pathParams;
    public FirebasedatabaseProjectsLocationsInstancesReenableRequest withPathParams(FirebasedatabaseProjectsLocationsInstancesReenablePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebasedatabaseProjectsLocationsInstancesReenableQueryParams queryParams;
    public FirebasedatabaseProjectsLocationsInstancesReenableRequest withQueryParams(FirebasedatabaseProjectsLocationsInstancesReenableQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public FirebasedatabaseProjectsLocationsInstancesReenableRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public FirebasedatabaseProjectsLocationsInstancesReenableSecurity security;
    public FirebasedatabaseProjectsLocationsInstancesReenableRequest withSecurity(FirebasedatabaseProjectsLocationsInstancesReenableSecurity security) {
        this.security = security;
        return this;
    }
}