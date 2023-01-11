package openapisdk.models.operations;



public class AdsensehostCustomchannelsDeleteResponse {
    public String contentType;
    public AdsensehostCustomchannelsDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomChannel customChannel;
    public AdsensehostCustomchannelsDeleteResponse withCustomChannel(openapisdk.models.shared.CustomChannel customChannel) {
        this.customChannel = customChannel;
        return this;
    }
    public Long statusCode;
    public AdsensehostCustomchannelsDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}