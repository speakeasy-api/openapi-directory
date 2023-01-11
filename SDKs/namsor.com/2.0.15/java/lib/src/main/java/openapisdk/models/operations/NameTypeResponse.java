package openapisdk.models.operations;



public class NameTypeResponse {
    public String contentType;
    public NameTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProperNounCategorizedOut properNounCategorizedOut;
    public NameTypeResponse withProperNounCategorizedOut(openapisdk.models.shared.ProperNounCategorizedOut properNounCategorizedOut) {
        this.properNounCategorizedOut = properNounCategorizedOut;
        return this;
    }
    public Long statusCode;
    public NameTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}