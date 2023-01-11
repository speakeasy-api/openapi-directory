package openapisdk.models.operations;



public class GetNetworkSwitchAccessControlListsResponse {
    public String contentType;
    public GetNetworkSwitchAccessControlListsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNetworkSwitchAccessControlListsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkSwitchAccessControlLists200ApplicationJSONObject;
    public GetNetworkSwitchAccessControlListsResponse withGetNetworkSwitchAccessControlLists200ApplicationJsonObject(java.util.Map<String, Object> getNetworkSwitchAccessControlLists200ApplicationJSONObject) {
        this.getNetworkSwitchAccessControlLists200ApplicationJSONObject = getNetworkSwitchAccessControlLists200ApplicationJSONObject;
        return this;
    }
}