package openapisdk.models.operations;



public class AllServicesResponse {
    public String contentType;
    public AllServicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Service[] services;
    public AllServicesResponse withServices(openapisdk.models.shared.Service[] services) {
        this.services = services;
        return this;
    }
    public Long statusCode;
    public AllServicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}