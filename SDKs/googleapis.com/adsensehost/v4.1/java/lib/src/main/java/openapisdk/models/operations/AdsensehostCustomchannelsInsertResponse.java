package openapisdk.models.operations;



public class AdsensehostCustomchannelsInsertResponse {
    public String contentType;
    public AdsensehostCustomchannelsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomChannel customChannel;
    public AdsensehostCustomchannelsInsertResponse withCustomChannel(openapisdk.models.shared.CustomChannel customChannel) {
        this.customChannel = customChannel;
        return this;
    }
    public Long statusCode;
    public AdsensehostCustomchannelsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}