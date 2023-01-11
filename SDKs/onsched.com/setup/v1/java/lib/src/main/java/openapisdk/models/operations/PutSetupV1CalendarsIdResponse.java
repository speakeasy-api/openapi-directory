package openapisdk.models.operations;



public class PutSetupV1CalendarsIdResponse {
    public String contentType;
    public PutSetupV1CalendarsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ScheduleViewModel scheduleViewModel;
    public PutSetupV1CalendarsIdResponse withScheduleViewModel(openapisdk.models.shared.ScheduleViewModel scheduleViewModel) {
        this.scheduleViewModel = scheduleViewModel;
        return this;
    }
    public Long statusCode;
    public PutSetupV1CalendarsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}