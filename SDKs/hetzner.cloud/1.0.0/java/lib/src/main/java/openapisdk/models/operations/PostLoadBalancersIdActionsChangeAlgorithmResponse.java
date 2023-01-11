package openapisdk.models.operations;



public class PostLoadBalancersIdActionsChangeAlgorithmResponse {
    public PostLoadBalancersIdActionsChangeAlgorithmActionResponse actionResponse;
    public PostLoadBalancersIdActionsChangeAlgorithmResponse withActionResponse(PostLoadBalancersIdActionsChangeAlgorithmActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostLoadBalancersIdActionsChangeAlgorithmResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostLoadBalancersIdActionsChangeAlgorithmResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}