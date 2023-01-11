package openapisdk.models.operations;



public class LegalNoticeResponse {
    public String contentType;
    public LegalNoticeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public String legalNotice200TextPlainString;
    public LegalNoticeResponse withLegalNotice200TextPlainString(String legalNotice200TextPlainString) {
        this.legalNotice200TextPlainString = legalNotice200TextPlainString;
        return this;
    }
    public Long statusCode;
    public LegalNoticeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}