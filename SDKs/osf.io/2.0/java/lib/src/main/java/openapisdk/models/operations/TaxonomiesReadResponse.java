package openapisdk.models.operations;



public class TaxonomiesReadResponse {
    public byte[] body;
    public TaxonomiesReadResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public TaxonomiesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TaxonomiesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}