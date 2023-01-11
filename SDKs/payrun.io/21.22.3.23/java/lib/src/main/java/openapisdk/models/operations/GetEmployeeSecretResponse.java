package openapisdk.models.operations;



public class GetEmployeeSecretResponse {
    public String contentType;
    public GetEmployeeSecretResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EmployeeSecret employeeSecret;
    public GetEmployeeSecretResponse withEmployeeSecret(openapisdk.models.shared.EmployeeSecret employeeSecret) {
        this.employeeSecret = employeeSecret;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetEmployeeSecretResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public GetEmployeeSecretResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}