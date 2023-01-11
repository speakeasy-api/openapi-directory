package openapisdk.models.operations;



public class GetNetworkSwitchQosRuleResponse {
    public String contentType;
    public GetNetworkSwitchQosRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNetworkSwitchQosRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkSwitchQosRule200ApplicationJSONObject;
    public GetNetworkSwitchQosRuleResponse withGetNetworkSwitchQosRule200ApplicationJsonObject(java.util.Map<String, Object> getNetworkSwitchQosRule200ApplicationJSONObject) {
        this.getNetworkSwitchQosRule200ApplicationJSONObject = getNetworkSwitchQosRule200ApplicationJSONObject;
        return this;
    }
}