package openapisdk.models.operations;



public class ListRateLimitResponse {
    public String contentType;
    public ListRateLimitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListRateLimitListRateLimitResponse listRateLimitResponse;
    public ListRateLimitResponse withListRateLimitResponse(ListRateLimitListRateLimitResponse listRateLimitResponse) {
        this.listRateLimitResponse = listRateLimitResponse;
        return this;
    }
    public Long statusCode;
    public ListRateLimitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}