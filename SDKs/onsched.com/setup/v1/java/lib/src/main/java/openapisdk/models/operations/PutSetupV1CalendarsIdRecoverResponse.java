package openapisdk.models.operations;



public class PutSetupV1CalendarsIdRecoverResponse {
    public String contentType;
    public PutSetupV1CalendarsIdRecoverResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ScheduleViewModel scheduleViewModel;
    public PutSetupV1CalendarsIdRecoverResponse withScheduleViewModel(openapisdk.models.shared.ScheduleViewModel scheduleViewModel) {
        this.scheduleViewModel = scheduleViewModel;
        return this;
    }
    public Long statusCode;
    public PutSetupV1CalendarsIdRecoverResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}