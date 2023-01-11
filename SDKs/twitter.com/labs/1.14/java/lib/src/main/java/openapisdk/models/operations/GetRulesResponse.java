package openapisdk.models.operations;



public class GetRulesResponse {
    public String contentType;
    public GetRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public GetRulesResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.GetRulesResponse getRulesResponse;
    public GetRulesResponse withGetRulesResponse(openapisdk.models.shared.GetRulesResponse getRulesResponse) {
        this.getRulesResponse = getRulesResponse;
        return this;
    }
    public Object problem;
    public GetRulesResponse withProblem(Object problem) {
        this.problem = problem;
        return this;
    }
    public Long statusCode;
    public GetRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}