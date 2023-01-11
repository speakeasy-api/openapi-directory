package openapisdk.models.operations;



public class FindUsersByUsernameResponse {
    public String contentType;
    public FindUsersByUsernameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public FindUsersByUsernameResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Object problem;
    public FindUsersByUsernameResponse withProblem(Object problem) {
        this.problem = problem;
        return this;
    }
    public Long statusCode;
    public FindUsersByUsernameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserLookupResponse userLookupResponse;
    public FindUsersByUsernameResponse withUserLookupResponse(openapisdk.models.shared.UserLookupResponse userLookupResponse) {
        this.userLookupResponse = userLookupResponse;
        return this;
    }
}