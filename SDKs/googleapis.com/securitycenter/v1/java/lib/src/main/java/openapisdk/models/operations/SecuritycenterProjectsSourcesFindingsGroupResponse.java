package openapisdk.models.operations;



public class SecuritycenterProjectsSourcesFindingsGroupResponse {
    public String contentType;
    public SecuritycenterProjectsSourcesFindingsGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GroupFindingsResponse groupFindingsResponse;
    public SecuritycenterProjectsSourcesFindingsGroupResponse withGroupFindingsResponse(openapisdk.models.shared.GroupFindingsResponse groupFindingsResponse) {
        this.groupFindingsResponse = groupFindingsResponse;
        return this;
    }
    public Long statusCode;
    public SecuritycenterProjectsSourcesFindingsGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}