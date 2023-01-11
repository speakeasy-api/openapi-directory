package openapisdk.models.operations;



public class AddVideoCreditAlt1Response {
    public String contentType;
    public AddVideoCreditAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddVideoCreditAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Credit credit;
    public AddVideoCreditAlt1Response withCredit(openapisdk.models.shared.Credit credit) {
        this.credit = credit;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public AddVideoCreditAlt1Response withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
}