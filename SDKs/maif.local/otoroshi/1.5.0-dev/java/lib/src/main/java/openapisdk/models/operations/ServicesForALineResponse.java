package openapisdk.models.operations;



public class ServicesForALineResponse {
    public String contentType;
    public ServicesForALineResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Service[] services;
    public ServicesForALineResponse withServices(openapisdk.models.shared.Service[] services) {
        this.services = services;
        return this;
    }
    public Long statusCode;
    public ServicesForALineResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}