package openapisdk.models.operations;



public class CheckIfUserSubscribedToChannelResponse {
    public String contentType;
    public CheckIfUserSubscribedToChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CheckIfUserSubscribedToChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public CheckIfUserSubscribedToChannelResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
}