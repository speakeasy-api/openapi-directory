package openapisdk.models.operations;



public class YoutubeChannelSectionsListResponse {
    public openapisdk.models.shared.ChannelSectionListResponse channelSectionListResponse;
    public YoutubeChannelSectionsListResponse withChannelSectionListResponse(openapisdk.models.shared.ChannelSectionListResponse channelSectionListResponse) {
        this.channelSectionListResponse = channelSectionListResponse;
        return this;
    }
    public String contentType;
    public YoutubeChannelSectionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public YoutubeChannelSectionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}