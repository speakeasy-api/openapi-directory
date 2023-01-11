package openapisdk.models.operations;



public class PutEmployerSecretResponse {
    public String contentType;
    public PutEmployerSecretResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EmployerSecret employerSecret;
    public PutEmployerSecretResponse withEmployerSecret(openapisdk.models.shared.EmployerSecret employerSecret) {
        this.employerSecret = employerSecret;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PutEmployerSecretResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public PutEmployerSecretResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}