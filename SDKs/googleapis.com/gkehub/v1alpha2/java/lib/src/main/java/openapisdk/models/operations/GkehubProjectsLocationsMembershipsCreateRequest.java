package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkehubProjectsLocationsMembershipsCreateRequest {
    public GkehubProjectsLocationsMembershipsCreatePathParams pathParams;
    public GkehubProjectsLocationsMembershipsCreateRequest withPathParams(GkehubProjectsLocationsMembershipsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GkehubProjectsLocationsMembershipsCreateQueryParams queryParams;
    public GkehubProjectsLocationsMembershipsCreateRequest withQueryParams(GkehubProjectsLocationsMembershipsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MembershipInput request;
    public GkehubProjectsLocationsMembershipsCreateRequest withRequest(openapisdk.models.shared.MembershipInput request) {
        this.request = request;
        return this;
    }
    public GkehubProjectsLocationsMembershipsCreateSecurity security;
    public GkehubProjectsLocationsMembershipsCreateRequest withSecurity(GkehubProjectsLocationsMembershipsCreateSecurity security) {
        this.security = security;
        return this;
    }
}