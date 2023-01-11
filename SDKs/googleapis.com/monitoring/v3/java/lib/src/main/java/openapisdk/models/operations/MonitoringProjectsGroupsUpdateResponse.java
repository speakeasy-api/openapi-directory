package openapisdk.models.operations;



public class MonitoringProjectsGroupsUpdateResponse {
    public String contentType;
    public MonitoringProjectsGroupsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Group group;
    public MonitoringProjectsGroupsUpdateResponse withGroup(openapisdk.models.shared.Group group) {
        this.group = group;
        return this;
    }
    public Long statusCode;
    public MonitoringProjectsGroupsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}