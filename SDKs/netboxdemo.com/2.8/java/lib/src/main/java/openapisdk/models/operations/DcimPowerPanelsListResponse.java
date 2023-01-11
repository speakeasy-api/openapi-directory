package openapisdk.models.operations;



public class DcimPowerPanelsListResponse {
    public String contentType;
    public DcimPowerPanelsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimPowerPanelsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DcimPowerPanelsList200ApplicationJson dcimPowerPanelsList200ApplicationJSONObject;
    public DcimPowerPanelsListResponse withDcimPowerPanelsList200ApplicationJsonObject(DcimPowerPanelsList200ApplicationJson dcimPowerPanelsList200ApplicationJSONObject) {
        this.dcimPowerPanelsList200ApplicationJSONObject = dcimPowerPanelsList200ApplicationJSONObject;
        return this;
    }
}