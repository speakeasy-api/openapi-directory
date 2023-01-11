package openapisdk.models.operations;



public class GetApiVVersionMetalsBenchmarkHistoryResponse {
    public byte[] body;
    public GetApiVVersionMetalsBenchmarkHistoryResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetApiVVersionMetalsBenchmarkHistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IntervalCollectionResponse[] intervalCollectionResponses;
    public GetApiVVersionMetalsBenchmarkHistoryResponse withIntervalCollectionResponses(openapisdk.models.shared.IntervalCollectionResponse[] intervalCollectionResponses) {
        this.intervalCollectionResponses = intervalCollectionResponses;
        return this;
    }
    public java.util.Map<String, Object> problemDetails;
    public GetApiVVersionMetalsBenchmarkHistoryResponse withProblemDetails(java.util.Map<String, Object> problemDetails) {
        this.problemDetails = problemDetails;
        return this;
    }
    public Long statusCode;
    public GetApiVVersionMetalsBenchmarkHistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}