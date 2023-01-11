package openapisdk.models.operations;



public class AdsensehostCustomchannelsPatchResponse {
    public String contentType;
    public AdsensehostCustomchannelsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomChannel customChannel;
    public AdsensehostCustomchannelsPatchResponse withCustomChannel(openapisdk.models.shared.CustomChannel customChannel) {
        this.customChannel = customChannel;
        return this;
    }
    public Long statusCode;
    public AdsensehostCustomchannelsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}