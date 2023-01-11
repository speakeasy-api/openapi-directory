package openapisdk.models.operations;



public class GetLoadBalancerTypesResponse {
    public String contentType;
    public GetLoadBalancerTypesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetLoadBalancerTypesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetLoadBalancerTypes200ApplicationJson getLoadBalancerTypes200ApplicationJSONObject;
    public GetLoadBalancerTypesResponse withGetLoadBalancerTypes200ApplicationJsonObject(GetLoadBalancerTypes200ApplicationJson getLoadBalancerTypes200ApplicationJSONObject) {
        this.getLoadBalancerTypes200ApplicationJSONObject = getLoadBalancerTypes200ApplicationJSONObject;
        return this;
    }
}