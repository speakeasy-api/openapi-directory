package openapisdk.models.operations;



public class CalendarSettingsWatchResponse {
    public openapisdk.models.shared.Channel channel;
    public CalendarSettingsWatchResponse withChannel(openapisdk.models.shared.Channel channel) {
        this.channel = channel;
        return this;
    }
    public String contentType;
    public CalendarSettingsWatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CalendarSettingsWatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}