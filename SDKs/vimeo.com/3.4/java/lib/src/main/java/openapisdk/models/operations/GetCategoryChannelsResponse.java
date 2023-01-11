package openapisdk.models.operations;



public class GetCategoryChannelsResponse {
    public String contentType;
    public GetCategoryChannelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCategoryChannelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Channel[] channels;
    public GetCategoryChannelsResponse withChannels(openapisdk.models.shared.Channel[] channels) {
        this.channels = channels;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetCategoryChannelsResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
}