package openapisdk.models.operations;



public class FindUsersByIdResponse {
    public String contentType;
    public FindUsersByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public FindUsersByIdResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Object problem;
    public FindUsersByIdResponse withProblem(Object problem) {
        this.problem = problem;
        return this;
    }
    public Long statusCode;
    public FindUsersByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserLookupResponse userLookupResponse;
    public FindUsersByIdResponse withUserLookupResponse(openapisdk.models.shared.UserLookupResponse userLookupResponse) {
        this.userLookupResponse = userLookupResponse;
        return this;
    }
}