package openapisdk.models.operations;



public class YoutubeThirdPartyLinksListResponse {
    public String contentType;
    public YoutubeThirdPartyLinksListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public YoutubeThirdPartyLinksListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ThirdPartyLinkListResponse thirdPartyLinkListResponse;
    public YoutubeThirdPartyLinksListResponse withThirdPartyLinkListResponse(openapisdk.models.shared.ThirdPartyLinkListResponse thirdPartyLinkListResponse) {
        this.thirdPartyLinkListResponse = thirdPartyLinkListResponse;
        return this;
    }
}