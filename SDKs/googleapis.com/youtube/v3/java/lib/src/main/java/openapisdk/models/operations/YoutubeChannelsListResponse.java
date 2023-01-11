package openapisdk.models.operations;



public class YoutubeChannelsListResponse {
    public openapisdk.models.shared.ChannelListResponse channelListResponse;
    public YoutubeChannelsListResponse withChannelListResponse(openapisdk.models.shared.ChannelListResponse channelListResponse) {
        this.channelListResponse = channelListResponse;
        return this;
    }
    public String contentType;
    public YoutubeChannelsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public YoutubeChannelsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}