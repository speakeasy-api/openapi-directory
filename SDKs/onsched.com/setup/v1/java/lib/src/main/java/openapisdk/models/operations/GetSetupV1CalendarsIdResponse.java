package openapisdk.models.operations;



public class GetSetupV1CalendarsIdResponse {
    public String contentType;
    public GetSetupV1CalendarsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ScheduleViewModel scheduleViewModel;
    public GetSetupV1CalendarsIdResponse withScheduleViewModel(openapisdk.models.shared.ScheduleViewModel scheduleViewModel) {
        this.scheduleViewModel = scheduleViewModel;
        return this;
    }
    public Long statusCode;
    public GetSetupV1CalendarsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}