package openapisdk.models.operations;



public class GetEmployeesFromPayScheduleOnEffectiveDateResponse {
    public String contentType;
    public GetEmployeesFromPayScheduleOnEffectiveDateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetEmployeesFromPayScheduleOnEffectiveDateResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.LinkCollection linkCollection;
    public GetEmployeesFromPayScheduleOnEffectiveDateResponse withLinkCollection(openapisdk.models.shared.LinkCollection linkCollection) {
        this.linkCollection = linkCollection;
        return this;
    }
    public Long statusCode;
    public GetEmployeesFromPayScheduleOnEffectiveDateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}