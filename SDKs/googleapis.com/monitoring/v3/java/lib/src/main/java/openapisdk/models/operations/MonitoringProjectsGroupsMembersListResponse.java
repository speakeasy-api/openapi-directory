package openapisdk.models.operations;



public class MonitoringProjectsGroupsMembersListResponse {
    public String contentType;
    public MonitoringProjectsGroupsMembersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListGroupMembersResponse listGroupMembersResponse;
    public MonitoringProjectsGroupsMembersListResponse withListGroupMembersResponse(openapisdk.models.shared.ListGroupMembersResponse listGroupMembersResponse) {
        this.listGroupMembersResponse = listGroupMembersResponse;
        return this;
    }
    public Long statusCode;
    public MonitoringProjectsGroupsMembersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}