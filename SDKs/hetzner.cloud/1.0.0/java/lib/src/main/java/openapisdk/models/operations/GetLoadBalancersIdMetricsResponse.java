package openapisdk.models.operations;



public class GetLoadBalancersIdMetricsResponse {
    public String contentType;
    public GetLoadBalancersIdMetricsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetLoadBalancersIdMetricsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetLoadBalancersIdMetrics200ApplicationJson getLoadBalancersIdMetrics200ApplicationJSONObject;
    public GetLoadBalancersIdMetricsResponse withGetLoadBalancersIdMetrics200ApplicationJsonObject(GetLoadBalancersIdMetrics200ApplicationJson getLoadBalancersIdMetrics200ApplicationJSONObject) {
        this.getLoadBalancersIdMetrics200ApplicationJSONObject = getLoadBalancersIdMetrics200ApplicationJSONObject;
        return this;
    }
}