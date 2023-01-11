package openapisdk.models.operations;



public class GetLoadBalancersResponse {
    public String contentType;
    public GetLoadBalancersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetLoadBalancersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetLoadBalancers200ApplicationJson getLoadBalancers200ApplicationJSONObject;
    public GetLoadBalancersResponse withGetLoadBalancers200ApplicationJsonObject(GetLoadBalancers200ApplicationJson getLoadBalancers200ApplicationJSONObject) {
        this.getLoadBalancers200ApplicationJSONObject = getLoadBalancers200ApplicationJSONObject;
        return this;
    }
}