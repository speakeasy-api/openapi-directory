package openapisdk.models.operations;



public class GetApiVVersionCurrenciesSummaryResponse {
    public byte[] body;
    public GetApiVVersionCurrenciesSummaryResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetApiVVersionCurrenciesSummaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> problemDetails;
    public GetApiVVersionCurrenciesSummaryResponse withProblemDetails(java.util.Map<String, Object> problemDetails) {
        this.problemDetails = problemDetails;
        return this;
    }
    public Long statusCode;
    public GetApiVVersionCurrenciesSummaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SummaryResponse[] summaryResponses;
    public GetApiVVersionCurrenciesSummaryResponse withSummaryResponses(openapisdk.models.shared.SummaryResponse[] summaryResponses) {
        this.summaryResponses = summaryResponses;
        return this;
    }
}