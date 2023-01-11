package openapisdk.models.operations;



public class FindPrivateTweetMetricsByIdResponse {
    public String contentType;
    public FindPrivateTweetMetricsByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public FindPrivateTweetMetricsByIdResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Object problem;
    public FindPrivateTweetMetricsByIdResponse withProblem(Object problem) {
        this.problem = problem;
        return this;
    }
    public Long statusCode;
    public FindPrivateTweetMetricsByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TweetMetricsResponse tweetMetricsResponse;
    public FindPrivateTweetMetricsByIdResponse withTweetMetricsResponse(openapisdk.models.shared.TweetMetricsResponse tweetMetricsResponse) {
        this.tweetMetricsResponse = tweetMetricsResponse;
        return this;
    }
}