package openapisdk.models.operations;



public class CloudidentityGroupsMembershipsModifyMembershipRolesResponse {
    public String contentType;
    public CloudidentityGroupsMembershipsModifyMembershipRolesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ModifyMembershipRolesResponse modifyMembershipRolesResponse;
    public CloudidentityGroupsMembershipsModifyMembershipRolesResponse withModifyMembershipRolesResponse(openapisdk.models.shared.ModifyMembershipRolesResponse modifyMembershipRolesResponse) {
        this.modifyMembershipRolesResponse = modifyMembershipRolesResponse;
        return this;
    }
    public Long statusCode;
    public CloudidentityGroupsMembershipsModifyMembershipRolesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}