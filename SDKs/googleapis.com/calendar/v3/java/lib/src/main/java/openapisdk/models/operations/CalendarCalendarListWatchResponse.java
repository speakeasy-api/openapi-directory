package openapisdk.models.operations;



public class CalendarCalendarListWatchResponse {
    public openapisdk.models.shared.Channel channel;
    public CalendarCalendarListWatchResponse withChannel(openapisdk.models.shared.Channel channel) {
        this.channel = channel;
        return this;
    }
    public String contentType;
    public CalendarCalendarListWatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CalendarCalendarListWatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}