package openapisdk.models.operations;



public class MonitoringProjectsUptimeCheckConfigsListResponse {
    public String contentType;
    public MonitoringProjectsUptimeCheckConfigsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListUptimeCheckConfigsResponse listUptimeCheckConfigsResponse;
    public MonitoringProjectsUptimeCheckConfigsListResponse withListUptimeCheckConfigsResponse(openapisdk.models.shared.ListUptimeCheckConfigsResponse listUptimeCheckConfigsResponse) {
        this.listUptimeCheckConfigsResponse = listUptimeCheckConfigsResponse;
        return this;
    }
    public Long statusCode;
    public MonitoringProjectsUptimeCheckConfigsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}