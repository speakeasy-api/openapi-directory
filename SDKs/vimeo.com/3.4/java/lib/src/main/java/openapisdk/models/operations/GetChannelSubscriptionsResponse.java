package openapisdk.models.operations;



public class GetChannelSubscriptionsResponse {
    public String contentType;
    public GetChannelSubscriptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetChannelSubscriptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Channel[] channels;
    public GetChannelSubscriptionsResponse withChannels(openapisdk.models.shared.Channel[] channels) {
        this.channels = channels;
        return this;
    }
}