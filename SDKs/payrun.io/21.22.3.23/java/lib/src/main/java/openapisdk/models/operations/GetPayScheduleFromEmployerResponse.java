package openapisdk.models.operations;



public class GetPayScheduleFromEmployerResponse {
    public String contentType;
    public GetPayScheduleFromEmployerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetPayScheduleFromEmployerResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.PaySchedule paySchedule;
    public GetPayScheduleFromEmployerResponse withPaySchedule(openapisdk.models.shared.PaySchedule paySchedule) {
        this.paySchedule = paySchedule;
        return this;
    }
    public Long statusCode;
    public GetPayScheduleFromEmployerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}