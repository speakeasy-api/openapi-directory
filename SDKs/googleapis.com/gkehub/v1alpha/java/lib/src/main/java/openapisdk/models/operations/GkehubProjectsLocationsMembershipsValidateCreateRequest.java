package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkehubProjectsLocationsMembershipsValidateCreateRequest {
    public GkehubProjectsLocationsMembershipsValidateCreatePathParams pathParams;
    public GkehubProjectsLocationsMembershipsValidateCreateRequest withPathParams(GkehubProjectsLocationsMembershipsValidateCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GkehubProjectsLocationsMembershipsValidateCreateQueryParams queryParams;
    public GkehubProjectsLocationsMembershipsValidateCreateRequest withQueryParams(GkehubProjectsLocationsMembershipsValidateCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ValidateCreateMembershipRequestInput request;
    public GkehubProjectsLocationsMembershipsValidateCreateRequest withRequest(openapisdk.models.shared.ValidateCreateMembershipRequestInput request) {
        this.request = request;
        return this;
    }
    public GkehubProjectsLocationsMembershipsValidateCreateSecurity security;
    public GkehubProjectsLocationsMembershipsValidateCreateRequest withSecurity(GkehubProjectsLocationsMembershipsValidateCreateSecurity security) {
        this.security = security;
        return this;
    }
}