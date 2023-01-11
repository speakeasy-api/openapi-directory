package openapisdk.models.operations;



public class DeleteTokenResponse {
    public String contentType;
    public DeleteTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Auth auth;
    public DeleteTokenResponse withAuth(openapisdk.models.shared.Auth auth) {
        this.auth = auth;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public DeleteTokenResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
}