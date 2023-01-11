package openapisdk.models.operations;



public class FindTweetsByIdResponse {
    public String contentType;
    public FindTweetsByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public FindTweetsByIdResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Object problem;
    public FindTweetsByIdResponse withProblem(Object problem) {
        this.problem = problem;
        return this;
    }
    public Long statusCode;
    public FindTweetsByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TweetLookupResponse tweetLookupResponse;
    public FindTweetsByIdResponse withTweetLookupResponse(openapisdk.models.shared.TweetLookupResponse tweetLookupResponse) {
        this.tweetLookupResponse = tweetLookupResponse;
        return this;
    }
}