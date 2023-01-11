package openapisdk.models.operations;



public class YoutubeChannelBannersInsertResponse {
    public openapisdk.models.shared.ChannelBannerResource channelBannerResource;
    public YoutubeChannelBannersInsertResponse withChannelBannerResource(openapisdk.models.shared.ChannelBannerResource channelBannerResource) {
        this.channelBannerResource = channelBannerResource;
        return this;
    }
    public String contentType;
    public YoutubeChannelBannersInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public YoutubeChannelBannersInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}