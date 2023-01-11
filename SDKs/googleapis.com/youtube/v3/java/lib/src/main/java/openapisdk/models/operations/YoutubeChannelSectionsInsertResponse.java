package openapisdk.models.operations;



public class YoutubeChannelSectionsInsertResponse {
    public openapisdk.models.shared.ChannelSection channelSection;
    public YoutubeChannelSectionsInsertResponse withChannelSection(openapisdk.models.shared.ChannelSection channelSection) {
        this.channelSection = channelSection;
        return this;
    }
    public String contentType;
    public YoutubeChannelSectionsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public YoutubeChannelSectionsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}