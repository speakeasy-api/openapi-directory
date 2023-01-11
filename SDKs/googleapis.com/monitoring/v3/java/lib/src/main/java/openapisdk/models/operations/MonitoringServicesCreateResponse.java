package openapisdk.models.operations;



public class MonitoringServicesCreateResponse {
    public String contentType;
    public MonitoringServicesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Service service;
    public MonitoringServicesCreateResponse withService(openapisdk.models.shared.Service service) {
        this.service = service;
        return this;
    }
    public Long statusCode;
    public MonitoringServicesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}