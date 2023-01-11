package openapisdk.models.operations;



public class SecuritycenterOrganizationsSourcesFindingsGroupResponse {
    public String contentType;
    public SecuritycenterOrganizationsSourcesFindingsGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GroupFindingsResponse groupFindingsResponse;
    public SecuritycenterOrganizationsSourcesFindingsGroupResponse withGroupFindingsResponse(openapisdk.models.shared.GroupFindingsResponse groupFindingsResponse) {
        this.groupFindingsResponse = groupFindingsResponse;
        return this;
    }
    public Long statusCode;
    public SecuritycenterOrganizationsSourcesFindingsGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}