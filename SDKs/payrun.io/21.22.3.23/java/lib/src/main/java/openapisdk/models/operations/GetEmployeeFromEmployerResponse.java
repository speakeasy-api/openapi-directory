package openapisdk.models.operations;



public class GetEmployeeFromEmployerResponse {
    public String contentType;
    public GetEmployeeFromEmployerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Employee employee;
    public GetEmployeeFromEmployerResponse withEmployee(openapisdk.models.shared.Employee employee) {
        this.employee = employee;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetEmployeeFromEmployerResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public GetEmployeeFromEmployerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}