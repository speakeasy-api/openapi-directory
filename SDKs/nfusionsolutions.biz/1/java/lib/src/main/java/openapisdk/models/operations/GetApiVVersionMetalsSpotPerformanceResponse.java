package openapisdk.models.operations;



public class GetApiVVersionMetalsSpotPerformanceResponse {
    public byte[] body;
    public GetApiVVersionMetalsSpotPerformanceResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetApiVVersionMetalsSpotPerformanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IntervalCollectionResponse[] intervalCollectionResponses;
    public GetApiVVersionMetalsSpotPerformanceResponse withIntervalCollectionResponses(openapisdk.models.shared.IntervalCollectionResponse[] intervalCollectionResponses) {
        this.intervalCollectionResponses = intervalCollectionResponses;
        return this;
    }
    public java.util.Map<String, Object> problemDetails;
    public GetApiVVersionMetalsSpotPerformanceResponse withProblemDetails(java.util.Map<String, Object> problemDetails) {
        this.problemDetails = problemDetails;
        return this;
    }
    public Long statusCode;
    public GetApiVVersionMetalsSpotPerformanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}