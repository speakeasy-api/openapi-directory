package openapisdk.models.operations;



public class GetApiVVersionMetalsSpotPerformanceAnnualResponse {
    public byte[] body;
    public GetApiVVersionMetalsSpotPerformanceAnnualResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetApiVVersionMetalsSpotPerformanceAnnualResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IntervalCollectionResponse[] intervalCollectionResponses;
    public GetApiVVersionMetalsSpotPerformanceAnnualResponse withIntervalCollectionResponses(openapisdk.models.shared.IntervalCollectionResponse[] intervalCollectionResponses) {
        this.intervalCollectionResponses = intervalCollectionResponses;
        return this;
    }
    public java.util.Map<String, Object> problemDetails;
    public GetApiVVersionMetalsSpotPerformanceAnnualResponse withProblemDetails(java.util.Map<String, Object> problemDetails) {
        this.problemDetails = problemDetails;
        return this;
    }
    public Long statusCode;
    public GetApiVVersionMetalsSpotPerformanceAnnualResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}