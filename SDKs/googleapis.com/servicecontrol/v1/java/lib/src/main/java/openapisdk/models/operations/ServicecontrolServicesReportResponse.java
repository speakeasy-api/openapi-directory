package openapisdk.models.operations;



public class ServicecontrolServicesReportResponse {
    public String contentType;
    public ServicecontrolServicesReportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ReportResponse reportResponse;
    public ServicecontrolServicesReportResponse withReportResponse(openapisdk.models.shared.ReportResponse reportResponse) {
        this.reportResponse = reportResponse;
        return this;
    }
    public Long statusCode;
    public ServicecontrolServicesReportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}