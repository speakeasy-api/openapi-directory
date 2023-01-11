package openapisdk.models.operations;



public class GetApiVVersionMetalsBenchmarkSummaryResponse {
    public byte[] body;
    public GetApiVVersionMetalsBenchmarkSummaryResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetApiVVersionMetalsBenchmarkSummaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> problemDetails;
    public GetApiVVersionMetalsBenchmarkSummaryResponse withProblemDetails(java.util.Map<String, Object> problemDetails) {
        this.problemDetails = problemDetails;
        return this;
    }
    public Long statusCode;
    public GetApiVVersionMetalsBenchmarkSummaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SummaryResponse[] summaryResponses;
    public GetApiVVersionMetalsBenchmarkSummaryResponse withSummaryResponses(openapisdk.models.shared.SummaryResponse[] summaryResponses) {
        this.summaryResponses = summaryResponses;
        return this;
    }
}