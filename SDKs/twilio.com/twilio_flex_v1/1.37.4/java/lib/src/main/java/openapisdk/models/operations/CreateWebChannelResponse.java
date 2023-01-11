package openapisdk.models.operations;



public class CreateWebChannelResponse {
    public String contentType;
    public CreateWebChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateWebChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.FlexV1WebChannel flexV1WebChannel;
    public CreateWebChannelResponse withFlexV1WebChannel(openapisdk.models.shared.FlexV1WebChannel flexV1WebChannel) {
        this.flexV1WebChannel = flexV1WebChannel;
        return this;
    }
}