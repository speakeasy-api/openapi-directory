package openapisdk.models.operations;



public class CalendarEventsWatchResponse {
    public openapisdk.models.shared.Channel channel;
    public CalendarEventsWatchResponse withChannel(openapisdk.models.shared.Channel channel) {
        this.channel = channel;
        return this;
    }
    public String contentType;
    public CalendarEventsWatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CalendarEventsWatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}