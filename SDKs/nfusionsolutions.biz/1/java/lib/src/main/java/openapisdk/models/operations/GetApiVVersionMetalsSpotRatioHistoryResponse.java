package openapisdk.models.operations;



public class GetApiVVersionMetalsSpotRatioHistoryResponse {
    public byte[] body;
    public GetApiVVersionMetalsSpotRatioHistoryResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetApiVVersionMetalsSpotRatioHistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IntervalCollectionResponse[] intervalCollectionResponses;
    public GetApiVVersionMetalsSpotRatioHistoryResponse withIntervalCollectionResponses(openapisdk.models.shared.IntervalCollectionResponse[] intervalCollectionResponses) {
        this.intervalCollectionResponses = intervalCollectionResponses;
        return this;
    }
    public java.util.Map<String, Object> problemDetails;
    public GetApiVVersionMetalsSpotRatioHistoryResponse withProblemDetails(java.util.Map<String, Object> problemDetails) {
        this.problemDetails = problemDetails;
        return this;
    }
    public Long statusCode;
    public GetApiVVersionMetalsSpotRatioHistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}