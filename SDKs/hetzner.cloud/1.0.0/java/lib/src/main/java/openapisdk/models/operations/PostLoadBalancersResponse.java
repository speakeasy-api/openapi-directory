package openapisdk.models.operations;



public class PostLoadBalancersResponse {
    public String contentType;
    public PostLoadBalancersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostLoadBalancersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostLoadBalancers201ApplicationJson postLoadBalancers201ApplicationJSONObject;
    public PostLoadBalancersResponse withPostLoadBalancers201ApplicationJsonObject(PostLoadBalancers201ApplicationJson postLoadBalancers201ApplicationJSONObject) {
        this.postLoadBalancers201ApplicationJSONObject = postLoadBalancers201ApplicationJSONObject;
        return this;
    }
}