package openapisdk.models.operations;



public class EditVideoCreditResponse {
    public String contentType;
    public EditVideoCreditResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EditVideoCreditResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Credit credit;
    public EditVideoCreditResponse withCredit(openapisdk.models.shared.Credit credit) {
        this.credit = credit;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public EditVideoCreditResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
}