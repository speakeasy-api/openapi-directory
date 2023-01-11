package openapisdk.models.operations;



public class PutLoadBalancersIdResponse {
    public String contentType;
    public PutLoadBalancersIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutLoadBalancersIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PutLoadBalancersId200ApplicationJson putLoadBalancersId200ApplicationJSONObject;
    public PutLoadBalancersIdResponse withPutLoadBalancersId200ApplicationJsonObject(PutLoadBalancersId200ApplicationJson putLoadBalancersId200ApplicationJSONObject) {
        this.putLoadBalancersId200ApplicationJSONObject = putLoadBalancersId200ApplicationJSONObject;
        return this;
    }
}