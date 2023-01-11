package openapisdk.models.operations;



public class AdsensehostUrlchannelsListResponse {
    public String contentType;
    public AdsensehostUrlchannelsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AdsensehostUrlchannelsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UrlChannels urlChannels;
    public AdsensehostUrlchannelsListResponse withUrlChannels(openapisdk.models.shared.UrlChannels urlChannels) {
        this.urlChannels = urlChannels;
        return this;
    }
}