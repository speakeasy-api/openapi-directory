package openapisdk.models.operations;



public class GetApiVVersionCurrenciesHistoryResponse {
    public byte[] body;
    public GetApiVVersionCurrenciesHistoryResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetApiVVersionCurrenciesHistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IntervalCollectionResponse[] intervalCollectionResponses;
    public GetApiVVersionCurrenciesHistoryResponse withIntervalCollectionResponses(openapisdk.models.shared.IntervalCollectionResponse[] intervalCollectionResponses) {
        this.intervalCollectionResponses = intervalCollectionResponses;
        return this;
    }
    public java.util.Map<String, Object> problemDetails;
    public GetApiVVersionCurrenciesHistoryResponse withProblemDetails(java.util.Map<String, Object> problemDetails) {
        this.problemDetails = problemDetails;
        return this;
    }
    public Long statusCode;
    public GetApiVVersionCurrenciesHistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}