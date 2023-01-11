package openapisdk.models.operations;



public class PutPayScheduleResponse {
    public String contentType;
    public PutPayScheduleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PutPayScheduleResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.PaySchedule paySchedule;
    public PutPayScheduleResponse withPaySchedule(openapisdk.models.shared.PaySchedule paySchedule) {
        this.paySchedule = paySchedule;
        return this;
    }
    public Long statusCode;
    public PutPayScheduleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}