package openapisdk.models.operations;



public class GetAvailableVideoChannelsResponse {
    public String contentType;
    public GetAvailableVideoChannelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAvailableVideoChannelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Channel[] channels;
    public GetAvailableVideoChannelsResponse withChannels(openapisdk.models.shared.Channel[] channels) {
        this.channels = channels;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetAvailableVideoChannelsResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
}