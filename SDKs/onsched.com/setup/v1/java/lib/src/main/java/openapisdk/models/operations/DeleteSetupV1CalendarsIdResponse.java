package openapisdk.models.operations;



public class DeleteSetupV1CalendarsIdResponse {
    public String contentType;
    public DeleteSetupV1CalendarsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ScheduleViewModel scheduleViewModel;
    public DeleteSetupV1CalendarsIdResponse withScheduleViewModel(openapisdk.models.shared.ScheduleViewModel scheduleViewModel) {
        this.scheduleViewModel = scheduleViewModel;
        return this;
    }
    public Long statusCode;
    public DeleteSetupV1CalendarsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}