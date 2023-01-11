package openapisdk.models.operations;



public class AdsensehostCustomchannelsUpdateResponse {
    public String contentType;
    public AdsensehostCustomchannelsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomChannel customChannel;
    public AdsensehostCustomchannelsUpdateResponse withCustomChannel(openapisdk.models.shared.CustomChannel customChannel) {
        this.customChannel = customChannel;
        return this;
    }
    public Long statusCode;
    public AdsensehostCustomchannelsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}