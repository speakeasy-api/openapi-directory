package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityGroupsMembershipsCreateRequest {
    public CloudidentityGroupsMembershipsCreatePathParams pathParams;
    public CloudidentityGroupsMembershipsCreateRequest withPathParams(CloudidentityGroupsMembershipsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudidentityGroupsMembershipsCreateQueryParams queryParams;
    public CloudidentityGroupsMembershipsCreateRequest withQueryParams(CloudidentityGroupsMembershipsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MembershipInput request;
    public CloudidentityGroupsMembershipsCreateRequest withRequest(openapisdk.models.shared.MembershipInput request) {
        this.request = request;
        return this;
    }
    public CloudidentityGroupsMembershipsCreateSecurity security;
    public CloudidentityGroupsMembershipsCreateRequest withSecurity(CloudidentityGroupsMembershipsCreateSecurity security) {
        this.security = security;
        return this;
    }
}