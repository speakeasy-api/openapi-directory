package openapisdk.models.operations;



public class GetChannelsResponse {
    public String contentType;
    public GetChannelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetChannelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Channel[] channels;
    public GetChannelsResponse withChannels(openapisdk.models.shared.Channel[] channels) {
        this.channels = channels;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetChannelsResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
}