package openapisdk.models.operations;



public class FindUserByIdResponse {
    public String contentType;
    public FindUserByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public FindUserByIdResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Object problem;
    public FindUserByIdResponse withProblem(Object problem) {
        this.problem = problem;
        return this;
    }
    public openapisdk.models.shared.SingleUserLookupResponse singleUserLookupResponse;
    public FindUserByIdResponse withSingleUserLookupResponse(openapisdk.models.shared.SingleUserLookupResponse singleUserLookupResponse) {
        this.singleUserLookupResponse = singleUserLookupResponse;
        return this;
    }
    public Long statusCode;
    public FindUserByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}