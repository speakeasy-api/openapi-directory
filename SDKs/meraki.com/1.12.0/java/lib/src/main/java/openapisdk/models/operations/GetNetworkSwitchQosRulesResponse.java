package openapisdk.models.operations;



public class GetNetworkSwitchQosRulesResponse {
    public String contentType;
    public GetNetworkSwitchQosRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNetworkSwitchQosRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkSwitchQosRules200ApplicationJSONObject;
    public GetNetworkSwitchQosRulesResponse withGetNetworkSwitchQosRules200ApplicationJsonObject(java.util.Map<String, Object> getNetworkSwitchQosRules200ApplicationJSONObject) {
        this.getNetworkSwitchQosRules200ApplicationJSONObject = getNetworkSwitchQosRules200ApplicationJSONObject;
        return this;
    }
}