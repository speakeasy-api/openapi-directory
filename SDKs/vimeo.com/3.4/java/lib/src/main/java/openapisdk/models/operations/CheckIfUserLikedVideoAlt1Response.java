package openapisdk.models.operations;



public class CheckIfUserLikedVideoAlt1Response {
    public String contentType;
    public CheckIfUserLikedVideoAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CheckIfUserLikedVideoAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public CheckIfUserLikedVideoAlt1Response withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
}