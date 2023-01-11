package openapisdk.models.operations;



public class ReportsActivitiesWatchResponse {
    public openapisdk.models.shared.Channel channel;
    public ReportsActivitiesWatchResponse withChannel(openapisdk.models.shared.Channel channel) {
        this.channel = channel;
        return this;
    }
    public String contentType;
    public ReportsActivitiesWatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReportsActivitiesWatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}