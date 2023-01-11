package openapisdk.models.operations;



public class ShowServiceCredentialTypeResponse {
    public String contentType;
    public ShowServiceCredentialTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorNotFound errorNotFound;
    public ShowServiceCredentialTypeResponse withErrorNotFound(openapisdk.models.shared.ErrorNotFound errorNotFound) {
        this.errorNotFound = errorNotFound;
        return this;
    }
    public openapisdk.models.shared.ServiceCredentialType serviceCredentialType;
    public ShowServiceCredentialTypeResponse withServiceCredentialType(openapisdk.models.shared.ServiceCredentialType serviceCredentialType) {
        this.serviceCredentialType = serviceCredentialType;
        return this;
    }
    public Long statusCode;
    public ShowServiceCredentialTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}