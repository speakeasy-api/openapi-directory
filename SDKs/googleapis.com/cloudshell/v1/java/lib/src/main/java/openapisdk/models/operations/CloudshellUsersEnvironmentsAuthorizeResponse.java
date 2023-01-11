package openapisdk.models.operations;



public class CloudshellUsersEnvironmentsAuthorizeResponse {
    public String contentType;
    public CloudshellUsersEnvironmentsAuthorizeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public CloudshellUsersEnvironmentsAuthorizeResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public CloudshellUsersEnvironmentsAuthorizeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}