package openapisdk.models.operations;



public class NameTypeGeoResponse {
    public String contentType;
    public NameTypeGeoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProperNounCategorizedOut properNounCategorizedOut;
    public NameTypeGeoResponse withProperNounCategorizedOut(openapisdk.models.shared.ProperNounCategorizedOut properNounCategorizedOut) {
        this.properNounCategorizedOut = properNounCategorizedOut;
        return this;
    }
    public Long statusCode;
    public NameTypeGeoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}