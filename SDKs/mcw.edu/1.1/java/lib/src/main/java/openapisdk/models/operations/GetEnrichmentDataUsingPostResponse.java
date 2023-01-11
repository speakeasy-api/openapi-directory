package openapisdk.models.operations;



public class GetEnrichmentDataUsingPostResponse {
    public byte[] body;
    public GetEnrichmentDataUsingPostResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetEnrichmentDataUsingPostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetEnrichmentDataUsingPostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}