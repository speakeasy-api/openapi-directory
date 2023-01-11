package openapisdk.models.operations;



public class AddVideoCreditResponse {
    public String contentType;
    public AddVideoCreditResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddVideoCreditResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Credit credit;
    public AddVideoCreditResponse withCredit(openapisdk.models.shared.Credit credit) {
        this.credit = credit;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public AddVideoCreditResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
}