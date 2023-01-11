package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityGroupsMembershipsModifyMembershipRolesRequest {
    public CloudidentityGroupsMembershipsModifyMembershipRolesPathParams pathParams;
    public CloudidentityGroupsMembershipsModifyMembershipRolesRequest withPathParams(CloudidentityGroupsMembershipsModifyMembershipRolesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudidentityGroupsMembershipsModifyMembershipRolesQueryParams queryParams;
    public CloudidentityGroupsMembershipsModifyMembershipRolesRequest withQueryParams(CloudidentityGroupsMembershipsModifyMembershipRolesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ModifyMembershipRolesRequest request;
    public CloudidentityGroupsMembershipsModifyMembershipRolesRequest withRequest(openapisdk.models.shared.ModifyMembershipRolesRequest request) {
        this.request = request;
        return this;
    }
    public CloudidentityGroupsMembershipsModifyMembershipRolesSecurity security;
    public CloudidentityGroupsMembershipsModifyMembershipRolesRequest withSecurity(CloudidentityGroupsMembershipsModifyMembershipRolesSecurity security) {
        this.security = security;
        return this;
    }
}