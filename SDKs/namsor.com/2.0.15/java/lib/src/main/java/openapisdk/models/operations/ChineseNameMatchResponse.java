package openapisdk.models.operations;



public class ChineseNameMatchResponse {
    public String contentType;
    public ChineseNameMatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NameMatchedOut nameMatchedOut;
    public ChineseNameMatchResponse withNameMatchedOut(openapisdk.models.shared.NameMatchedOut nameMatchedOut) {
        this.nameMatchedOut = nameMatchedOut;
        return this;
    }
    public Long statusCode;
    public ChineseNameMatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}