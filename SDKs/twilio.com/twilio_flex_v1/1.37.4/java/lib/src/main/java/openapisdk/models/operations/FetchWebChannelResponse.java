package openapisdk.models.operations;



public class FetchWebChannelResponse {
    public String contentType;
    public FetchWebChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchWebChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.FlexV1WebChannel flexV1WebChannel;
    public FetchWebChannelResponse withFlexV1WebChannel(openapisdk.models.shared.FlexV1WebChannel flexV1WebChannel) {
        this.flexV1WebChannel = flexV1WebChannel;
        return this;
    }
}