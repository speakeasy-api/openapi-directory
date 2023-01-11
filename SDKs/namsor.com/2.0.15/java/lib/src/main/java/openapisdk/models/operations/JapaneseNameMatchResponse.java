package openapisdk.models.operations;



public class JapaneseNameMatchResponse {
    public String contentType;
    public JapaneseNameMatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NameMatchedOut nameMatchedOut;
    public JapaneseNameMatchResponse withNameMatchedOut(openapisdk.models.shared.NameMatchedOut nameMatchedOut) {
        this.nameMatchedOut = nameMatchedOut;
        return this;
    }
    public Long statusCode;
    public JapaneseNameMatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}