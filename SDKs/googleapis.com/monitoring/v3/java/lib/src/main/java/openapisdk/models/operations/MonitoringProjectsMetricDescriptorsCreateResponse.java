package openapisdk.models.operations;



public class MonitoringProjectsMetricDescriptorsCreateResponse {
    public String contentType;
    public MonitoringProjectsMetricDescriptorsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MetricDescriptor metricDescriptor;
    public MonitoringProjectsMetricDescriptorsCreateResponse withMetricDescriptor(openapisdk.models.shared.MetricDescriptor metricDescriptor) {
        this.metricDescriptor = metricDescriptor;
        return this;
    }
    public Long statusCode;
    public MonitoringProjectsMetricDescriptorsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}