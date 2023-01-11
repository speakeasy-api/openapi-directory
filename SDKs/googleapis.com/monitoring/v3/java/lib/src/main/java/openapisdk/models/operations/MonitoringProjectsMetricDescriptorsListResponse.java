package openapisdk.models.operations;



public class MonitoringProjectsMetricDescriptorsListResponse {
    public String contentType;
    public MonitoringProjectsMetricDescriptorsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListMetricDescriptorsResponse listMetricDescriptorsResponse;
    public MonitoringProjectsMetricDescriptorsListResponse withListMetricDescriptorsResponse(openapisdk.models.shared.ListMetricDescriptorsResponse listMetricDescriptorsResponse) {
        this.listMetricDescriptorsResponse = listMetricDescriptorsResponse;
        return this;
    }
    public Long statusCode;
    public MonitoringProjectsMetricDescriptorsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}