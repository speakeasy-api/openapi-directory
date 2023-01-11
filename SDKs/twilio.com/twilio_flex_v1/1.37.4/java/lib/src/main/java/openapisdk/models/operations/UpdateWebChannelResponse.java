package openapisdk.models.operations;



public class UpdateWebChannelResponse {
    public String contentType;
    public UpdateWebChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateWebChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.FlexV1WebChannel flexV1WebChannel;
    public UpdateWebChannelResponse withFlexV1WebChannel(openapisdk.models.shared.FlexV1WebChannel flexV1WebChannel) {
        this.flexV1WebChannel = flexV1WebChannel;
        return this;
    }
}