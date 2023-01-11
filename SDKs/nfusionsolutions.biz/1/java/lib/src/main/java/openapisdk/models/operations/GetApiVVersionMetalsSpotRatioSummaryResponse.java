package openapisdk.models.operations;



public class GetApiVVersionMetalsSpotRatioSummaryResponse {
    public byte[] body;
    public GetApiVVersionMetalsSpotRatioSummaryResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetApiVVersionMetalsSpotRatioSummaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> problemDetails;
    public GetApiVVersionMetalsSpotRatioSummaryResponse withProblemDetails(java.util.Map<String, Object> problemDetails) {
        this.problemDetails = problemDetails;
        return this;
    }
    public Long statusCode;
    public GetApiVVersionMetalsSpotRatioSummaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SummaryResponse[] summaryResponses;
    public GetApiVVersionMetalsSpotRatioSummaryResponse withSummaryResponses(openapisdk.models.shared.SummaryResponse[] summaryResponses) {
        this.summaryResponses = summaryResponses;
        return this;
    }
}