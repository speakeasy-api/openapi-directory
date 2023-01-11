package openapisdk.models.operations;



public class GetNetworkFirmwareUpgradesResponse {
    public String contentType;
    public GetNetworkFirmwareUpgradesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNetworkFirmwareUpgradesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkFirmwareUpgrades200ApplicationJSONObject;
    public GetNetworkFirmwareUpgradesResponse withGetNetworkFirmwareUpgrades200ApplicationJsonObject(java.util.Map<String, Object> getNetworkFirmwareUpgrades200ApplicationJSONObject) {
        this.getNetworkFirmwareUpgrades200ApplicationJSONObject = getNetworkFirmwareUpgrades200ApplicationJSONObject;
        return this;
    }
}