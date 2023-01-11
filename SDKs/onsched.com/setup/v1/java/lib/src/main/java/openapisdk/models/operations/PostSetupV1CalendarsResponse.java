package openapisdk.models.operations;



public class PostSetupV1CalendarsResponse {
    public String contentType;
    public PostSetupV1CalendarsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ScheduleViewModel scheduleViewModel;
    public PostSetupV1CalendarsResponse withScheduleViewModel(openapisdk.models.shared.ScheduleViewModel scheduleViewModel) {
        this.scheduleViewModel = scheduleViewModel;
        return this;
    }
    public Long statusCode;
    public PostSetupV1CalendarsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}