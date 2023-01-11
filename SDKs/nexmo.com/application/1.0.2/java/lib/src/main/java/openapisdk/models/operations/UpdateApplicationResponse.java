package openapisdk.models.operations;



public class UpdateApplicationResponse {
    public String contentType;
    public UpdateApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Application application;
    public UpdateApplicationResponse withApplication(openapisdk.models.shared.Application application) {
        this.application = application;
        return this;
    }
}