package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkehubProjectsLocationsFleetsCreateRequest {
    public GkehubProjectsLocationsFleetsCreatePathParams pathParams;
    public GkehubProjectsLocationsFleetsCreateRequest withPathParams(GkehubProjectsLocationsFleetsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GkehubProjectsLocationsFleetsCreateQueryParams queryParams;
    public GkehubProjectsLocationsFleetsCreateRequest withQueryParams(GkehubProjectsLocationsFleetsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FleetInput request;
    public GkehubProjectsLocationsFleetsCreateRequest withRequest(openapisdk.models.shared.FleetInput request) {
        this.request = request;
        return this;
    }
    public GkehubProjectsLocationsFleetsCreateSecurity security;
    public GkehubProjectsLocationsFleetsCreateRequest withSecurity(GkehubProjectsLocationsFleetsCreateSecurity security) {
        this.security = security;
        return this;
    }
}