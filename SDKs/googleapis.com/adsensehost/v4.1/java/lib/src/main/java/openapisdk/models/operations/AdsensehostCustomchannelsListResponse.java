package openapisdk.models.operations;



public class AdsensehostCustomchannelsListResponse {
    public String contentType;
    public AdsensehostCustomchannelsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomChannels customChannels;
    public AdsensehostCustomchannelsListResponse withCustomChannels(openapisdk.models.shared.CustomChannels customChannels) {
        this.customChannels = customChannels;
        return this;
    }
    public Long statusCode;
    public AdsensehostCustomchannelsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}