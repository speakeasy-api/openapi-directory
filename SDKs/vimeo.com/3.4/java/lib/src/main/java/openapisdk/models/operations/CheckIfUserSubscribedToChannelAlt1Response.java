package openapisdk.models.operations;



public class CheckIfUserSubscribedToChannelAlt1Response {
    public String contentType;
    public CheckIfUserSubscribedToChannelAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CheckIfUserSubscribedToChannelAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public CheckIfUserSubscribedToChannelAlt1Response withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
}