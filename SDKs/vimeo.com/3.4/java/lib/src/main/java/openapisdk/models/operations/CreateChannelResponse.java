package openapisdk.models.operations;



public class CreateChannelResponse {
    public String contentType;
    public CreateChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Channel channel;
    public CreateChannelResponse withChannel(openapisdk.models.shared.Channel channel) {
        this.channel = channel;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public CreateChannelResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
}