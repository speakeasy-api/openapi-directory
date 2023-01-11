package openapisdk.models.operations;



public class GetVideoCreditResponse {
    public String contentType;
    public GetVideoCreditResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVideoCreditResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Credit credit;
    public GetVideoCreditResponse withCredit(openapisdk.models.shared.Credit credit) {
        this.credit = credit;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetVideoCreditResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
}