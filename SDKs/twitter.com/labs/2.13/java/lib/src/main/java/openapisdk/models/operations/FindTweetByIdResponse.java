package openapisdk.models.operations;



public class FindTweetByIdResponse {
    public String contentType;
    public FindTweetByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public FindTweetByIdResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Object problem;
    public FindTweetByIdResponse withProblem(Object problem) {
        this.problem = problem;
        return this;
    }
    public openapisdk.models.shared.SingleTweetLookupResponse singleTweetLookupResponse;
    public FindTweetByIdResponse withSingleTweetLookupResponse(openapisdk.models.shared.SingleTweetLookupResponse singleTweetLookupResponse) {
        this.singleTweetLookupResponse = singleTweetLookupResponse;
        return this;
    }
    public Long statusCode;
    public FindTweetByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}