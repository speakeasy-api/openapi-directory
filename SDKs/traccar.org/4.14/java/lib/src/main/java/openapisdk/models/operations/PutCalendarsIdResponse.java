package openapisdk.models.operations;



public class PutCalendarsIdResponse {
    public openapisdk.models.shared.Calendar calendar;
    public PutCalendarsIdResponse withCalendar(openapisdk.models.shared.Calendar calendar) {
        this.calendar = calendar;
        return this;
    }
    public String contentType;
    public PutCalendarsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutCalendarsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}