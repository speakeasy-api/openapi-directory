package openapisdk.models.operations;



public class YoutubeChannelsUpdateResponse {
    public openapisdk.models.shared.Channel channel;
    public YoutubeChannelsUpdateResponse withChannel(openapisdk.models.shared.Channel channel) {
        this.channel = channel;
        return this;
    }
    public String contentType;
    public YoutubeChannelsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public YoutubeChannelsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}