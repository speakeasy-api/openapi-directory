package openapisdk.models.operations;



public class YoutubeChannelSectionsUpdateResponse {
    public openapisdk.models.shared.ChannelSection channelSection;
    public YoutubeChannelSectionsUpdateResponse withChannelSection(openapisdk.models.shared.ChannelSection channelSection) {
        this.channelSection = channelSection;
        return this;
    }
    public String contentType;
    public YoutubeChannelSectionsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public YoutubeChannelSectionsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}