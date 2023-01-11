package openapisdk.models.operations;



public class GetServicesResponse {
    public String contentType;
    public GetServicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Service[] services;
    public GetServicesResponse withServices(openapisdk.models.shared.Service[] services) {
        this.services = services;
        return this;
    }
    public Long statusCode;
    public GetServicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}