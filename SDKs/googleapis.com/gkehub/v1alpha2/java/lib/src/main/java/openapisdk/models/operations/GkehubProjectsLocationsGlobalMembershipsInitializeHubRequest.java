package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest {
    public GkehubProjectsLocationsGlobalMembershipsInitializeHubPathParams pathParams;
    public GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest withPathParams(GkehubProjectsLocationsGlobalMembershipsInitializeHubPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GkehubProjectsLocationsGlobalMembershipsInitializeHubQueryParams queryParams;
    public GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest withQueryParams(GkehubProjectsLocationsGlobalMembershipsInitializeHubQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public GkehubProjectsLocationsGlobalMembershipsInitializeHubSecurity security;
    public GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest withSecurity(GkehubProjectsLocationsGlobalMembershipsInitializeHubSecurity security) {
        this.security = security;
        return this;
    }
}