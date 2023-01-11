package openapisdk.models.operations;



public class PutEmployeeSecretResponse {
    public String contentType;
    public PutEmployeeSecretResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EmployeeSecret employeeSecret;
    public PutEmployeeSecretResponse withEmployeeSecret(openapisdk.models.shared.EmployeeSecret employeeSecret) {
        this.employeeSecret = employeeSecret;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PutEmployeeSecretResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public PutEmployeeSecretResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}