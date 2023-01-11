package openapisdk.models.operations;



public class CreateApplicationResponse {
    public String contentType;
    public CreateApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApplicationCreated applicationCreated;
    public CreateApplicationResponse withApplicationCreated(openapisdk.models.shared.ApplicationCreated applicationCreated) {
        this.applicationCreated = applicationCreated;
        return this;
    }
}