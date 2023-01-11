package openapisdk.models.operations;



public class YoutubeThirdPartyLinksInsertResponse {
    public String contentType;
    public YoutubeThirdPartyLinksInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public YoutubeThirdPartyLinksInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ThirdPartyLink thirdPartyLink;
    public YoutubeThirdPartyLinksInsertResponse withThirdPartyLink(openapisdk.models.shared.ThirdPartyLink thirdPartyLink) {
        this.thirdPartyLink = thirdPartyLink;
        return this;
    }
}