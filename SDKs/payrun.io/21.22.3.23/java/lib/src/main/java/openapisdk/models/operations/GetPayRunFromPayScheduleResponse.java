package openapisdk.models.operations;



public class GetPayRunFromPayScheduleResponse {
    public String contentType;
    public GetPayRunFromPayScheduleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetPayRunFromPayScheduleResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.PayRun payRun;
    public GetPayRunFromPayScheduleResponse withPayRun(openapisdk.models.shared.PayRun payRun) {
        this.payRun = payRun;
        return this;
    }
    public Long statusCode;
    public GetPayRunFromPayScheduleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}