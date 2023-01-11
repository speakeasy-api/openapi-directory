package openapisdk.models.operations;



public class GetSetupV1CalendarsIdBlocksResponse {
    public java.util.Map<String, Object> calendarBlockListViewModel;
    public GetSetupV1CalendarsIdBlocksResponse withCalendarBlockListViewModel(java.util.Map<String, Object> calendarBlockListViewModel) {
        this.calendarBlockListViewModel = calendarBlockListViewModel;
        return this;
    }
    public String contentType;
    public GetSetupV1CalendarsIdBlocksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSetupV1CalendarsIdBlocksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}