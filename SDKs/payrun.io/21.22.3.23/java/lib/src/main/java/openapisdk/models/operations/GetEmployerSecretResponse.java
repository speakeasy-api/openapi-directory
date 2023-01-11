package openapisdk.models.operations;



public class GetEmployerSecretResponse {
    public String contentType;
    public GetEmployerSecretResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EmployerSecret employerSecret;
    public GetEmployerSecretResponse withEmployerSecret(openapisdk.models.shared.EmployerSecret employerSecret) {
        this.employerSecret = employerSecret;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetEmployerSecretResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public GetEmployerSecretResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}