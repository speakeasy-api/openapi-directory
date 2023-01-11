package openapisdk.models.operations;



public class PutEmployeeIntoEmployerResponse {
    public String contentType;
    public PutEmployeeIntoEmployerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Employee employee;
    public PutEmployeeIntoEmployerResponse withEmployee(openapisdk.models.shared.Employee employee) {
        this.employee = employee;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PutEmployeeIntoEmployerResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public PutEmployeeIntoEmployerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}