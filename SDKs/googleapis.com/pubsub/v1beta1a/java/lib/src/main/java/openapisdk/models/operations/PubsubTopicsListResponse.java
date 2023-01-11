package openapisdk.models.operations;



public class PubsubTopicsListResponse {
    public String contentType;
    public PubsubTopicsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListTopicsResponse listTopicsResponse;
    public PubsubTopicsListResponse withListTopicsResponse(openapisdk.models.shared.ListTopicsResponse listTopicsResponse) {
        this.listTopicsResponse = listTopicsResponse;
        return this;
    }
    public Long statusCode;
    public PubsubTopicsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}