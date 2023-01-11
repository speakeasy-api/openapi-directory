package openapisdk.models.operations;



public class FindUserByUsernameResponse {
    public String contentType;
    public FindUserByUsernameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public FindUserByUsernameResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Object problem;
    public FindUserByUsernameResponse withProblem(Object problem) {
        this.problem = problem;
        return this;
    }
    public openapisdk.models.shared.SingleUserLookupResponse singleUserLookupResponse;
    public FindUserByUsernameResponse withSingleUserLookupResponse(openapisdk.models.shared.SingleUserLookupResponse singleUserLookupResponse) {
        this.singleUserLookupResponse = singleUserLookupResponse;
        return this;
    }
    public Long statusCode;
    public FindUserByUsernameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}