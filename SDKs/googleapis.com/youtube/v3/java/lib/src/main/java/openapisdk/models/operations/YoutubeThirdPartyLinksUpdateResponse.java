package openapisdk.models.operations;



public class YoutubeThirdPartyLinksUpdateResponse {
    public String contentType;
    public YoutubeThirdPartyLinksUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public YoutubeThirdPartyLinksUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ThirdPartyLink thirdPartyLink;
    public YoutubeThirdPartyLinksUpdateResponse withThirdPartyLink(openapisdk.models.shared.ThirdPartyLink thirdPartyLink) {
        this.thirdPartyLink = thirdPartyLink;
        return this;
    }
}