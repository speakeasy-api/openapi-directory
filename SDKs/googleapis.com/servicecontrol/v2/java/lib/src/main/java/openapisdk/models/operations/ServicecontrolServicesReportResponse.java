package openapisdk.models.operations;



public class ServicecontrolServicesReportResponse {
    public String contentType;
    public ServicecontrolServicesReportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> reportResponse;
    public ServicecontrolServicesReportResponse withReportResponse(java.util.Map<String, Object> reportResponse) {
        this.reportResponse = reportResponse;
        return this;
    }
    public Long statusCode;
    public ServicecontrolServicesReportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}