package openapisdk.models.operations;



public class TaxonomiesListResponse {
    public byte[] body;
    public TaxonomiesListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public TaxonomiesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TaxonomiesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}