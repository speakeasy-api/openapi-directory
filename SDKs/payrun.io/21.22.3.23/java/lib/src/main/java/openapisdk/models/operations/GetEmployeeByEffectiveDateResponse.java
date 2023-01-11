package openapisdk.models.operations;



public class GetEmployeeByEffectiveDateResponse {
    public String contentType;
    public GetEmployeeByEffectiveDateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Employee employee;
    public GetEmployeeByEffectiveDateResponse withEmployee(openapisdk.models.shared.Employee employee) {
        this.employee = employee;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetEmployeeByEffectiveDateResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public GetEmployeeByEffectiveDateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}