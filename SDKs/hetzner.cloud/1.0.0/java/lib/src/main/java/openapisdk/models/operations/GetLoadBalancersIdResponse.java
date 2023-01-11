package openapisdk.models.operations;



public class GetLoadBalancersIdResponse {
    public String contentType;
    public GetLoadBalancersIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetLoadBalancersIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetLoadBalancersId200ApplicationJson getLoadBalancersId200ApplicationJSONObject;
    public GetLoadBalancersIdResponse withGetLoadBalancersId200ApplicationJsonObject(GetLoadBalancersId200ApplicationJson getLoadBalancersId200ApplicationJSONObject) {
        this.getLoadBalancersId200ApplicationJSONObject = getLoadBalancersId200ApplicationJSONObject;
        return this;
    }
}