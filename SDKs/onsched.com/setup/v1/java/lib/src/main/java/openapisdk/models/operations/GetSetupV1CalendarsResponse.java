package openapisdk.models.operations;



public class GetSetupV1CalendarsResponse {
    public String contentType;
    public GetSetupV1CalendarsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> scheduleListViewModel;
    public GetSetupV1CalendarsResponse withScheduleListViewModel(java.util.Map<String, Object> scheduleListViewModel) {
        this.scheduleListViewModel = scheduleListViewModel;
        return this;
    }
    public Long statusCode;
    public GetSetupV1CalendarsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}