package openapisdk.models.operations;



public class SearchSearchResponse {
    public byte[] body;
    public SearchSearchResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public SearchSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SearchSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.V3ErrorResponse v3ErrorResponse;
    public SearchSearchResponse withV3ErrorResponse(openapisdk.models.shared.V3ErrorResponse v3ErrorResponse) {
        this.v3ErrorResponse = v3ErrorResponse;
        return this;
    }
    public openapisdk.models.shared.V3SearchResult v3SearchResult;
    public SearchSearchResponse withV3SearchResult(openapisdk.models.shared.V3SearchResult v3SearchResult) {
        this.v3SearchResult = v3SearchResult;
        return this;
    }
}