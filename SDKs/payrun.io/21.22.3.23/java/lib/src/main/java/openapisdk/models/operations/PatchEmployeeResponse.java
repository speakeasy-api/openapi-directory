package openapisdk.models.operations;



public class PatchEmployeeResponse {
    public String contentType;
    public PatchEmployeeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Employee employee;
    public PatchEmployeeResponse withEmployee(openapisdk.models.shared.Employee employee) {
        this.employee = employee;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PatchEmployeeResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public PatchEmployeeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}