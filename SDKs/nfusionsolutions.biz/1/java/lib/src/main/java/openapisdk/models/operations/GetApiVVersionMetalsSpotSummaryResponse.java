package openapisdk.models.operations;



public class GetApiVVersionMetalsSpotSummaryResponse {
    public byte[] body;
    public GetApiVVersionMetalsSpotSummaryResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetApiVVersionMetalsSpotSummaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> problemDetails;
    public GetApiVVersionMetalsSpotSummaryResponse withProblemDetails(java.util.Map<String, Object> problemDetails) {
        this.problemDetails = problemDetails;
        return this;
    }
    public Long statusCode;
    public GetApiVVersionMetalsSpotSummaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SummaryResponse[] summaryResponses;
    public GetApiVVersionMetalsSpotSummaryResponse withSummaryResponses(openapisdk.models.shared.SummaryResponse[] summaryResponses) {
        this.summaryResponses = summaryResponses;
        return this;
    }
}