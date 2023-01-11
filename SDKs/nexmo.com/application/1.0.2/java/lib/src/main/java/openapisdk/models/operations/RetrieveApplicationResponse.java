package openapisdk.models.operations;



public class RetrieveApplicationResponse {
    public String contentType;
    public RetrieveApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RetrieveApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Application application;
    public RetrieveApplicationResponse withApplication(openapisdk.models.shared.Application application) {
        this.application = application;
        return this;
    }
}