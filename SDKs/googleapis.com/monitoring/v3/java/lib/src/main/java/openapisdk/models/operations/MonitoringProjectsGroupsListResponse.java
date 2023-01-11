package openapisdk.models.operations;



public class MonitoringProjectsGroupsListResponse {
    public String contentType;
    public MonitoringProjectsGroupsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListGroupsResponse listGroupsResponse;
    public MonitoringProjectsGroupsListResponse withListGroupsResponse(openapisdk.models.shared.ListGroupsResponse listGroupsResponse) {
        this.listGroupsResponse = listGroupsResponse;
        return this;
    }
    public Long statusCode;
    public MonitoringProjectsGroupsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}