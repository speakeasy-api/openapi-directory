package openapisdk.models.operations;



public class ShowServiceCredentialResponse {
    public String contentType;
    public ShowServiceCredentialResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorNotFound errorNotFound;
    public ShowServiceCredentialResponse withErrorNotFound(openapisdk.models.shared.ErrorNotFound errorNotFound) {
        this.errorNotFound = errorNotFound;
        return this;
    }
    public openapisdk.models.shared.ServiceCredential serviceCredential;
    public ShowServiceCredentialResponse withServiceCredential(openapisdk.models.shared.ServiceCredential serviceCredential) {
        this.serviceCredential = serviceCredential;
        return this;
    }
    public Long statusCode;
    public ShowServiceCredentialResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}