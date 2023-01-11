package openapisdk.models.operations;



public class MonitoringProjectsGroupsCreateResponse {
    public String contentType;
    public MonitoringProjectsGroupsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Group group;
    public MonitoringProjectsGroupsCreateResponse withGroup(openapisdk.models.shared.Group group) {
        this.group = group;
        return this;
    }
    public Long statusCode;
    public MonitoringProjectsGroupsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}