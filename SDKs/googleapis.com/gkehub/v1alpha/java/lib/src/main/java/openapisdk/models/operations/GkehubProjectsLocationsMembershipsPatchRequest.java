package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkehubProjectsLocationsMembershipsPatchRequest {
    public GkehubProjectsLocationsMembershipsPatchPathParams pathParams;
    public GkehubProjectsLocationsMembershipsPatchRequest withPathParams(GkehubProjectsLocationsMembershipsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GkehubProjectsLocationsMembershipsPatchQueryParams queryParams;
    public GkehubProjectsLocationsMembershipsPatchRequest withQueryParams(GkehubProjectsLocationsMembershipsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MembershipInput request;
    public GkehubProjectsLocationsMembershipsPatchRequest withRequest(openapisdk.models.shared.MembershipInput request) {
        this.request = request;
        return this;
    }
    public GkehubProjectsLocationsMembershipsPatchSecurity security;
    public GkehubProjectsLocationsMembershipsPatchRequest withSecurity(GkehubProjectsLocationsMembershipsPatchSecurity security) {
        this.security = security;
        return this;
    }
}