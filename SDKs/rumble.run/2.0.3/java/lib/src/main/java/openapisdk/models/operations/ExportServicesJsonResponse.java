package openapisdk.models.operations;



public class ExportServicesJsonResponse {
    public String contentType;
    public ExportServicesJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Service[] services;
    public ExportServicesJsonResponse withServices(openapisdk.models.shared.Service[] services) {
        this.services = services;
        return this;
    }
    public Long statusCode;
    public ExportServicesJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}