package openapisdk.models.operations;



public class FetchChannelResponse {
    public String contentType;
    public FetchChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.FlexV1Channel flexV1Channel;
    public FetchChannelResponse withFlexV1Channel(openapisdk.models.shared.FlexV1Channel flexV1Channel) {
        this.flexV1Channel = flexV1Channel;
        return this;
    }
}