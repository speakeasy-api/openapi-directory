package openapisdk.models.operations;



public class MonitoringProjectsMonitoredResourceDescriptorsListResponse {
    public String contentType;
    public MonitoringProjectsMonitoredResourceDescriptorsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListMonitoredResourceDescriptorsResponse listMonitoredResourceDescriptorsResponse;
    public MonitoringProjectsMonitoredResourceDescriptorsListResponse withListMonitoredResourceDescriptorsResponse(openapisdk.models.shared.ListMonitoredResourceDescriptorsResponse listMonitoredResourceDescriptorsResponse) {
        this.listMonitoredResourceDescriptorsResponse = listMonitoredResourceDescriptorsResponse;
        return this;
    }
    public Long statusCode;
    public MonitoringProjectsMonitoredResourceDescriptorsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}