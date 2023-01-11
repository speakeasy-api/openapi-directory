package openapisdk.models.operations;



public class DcimPowerOutletsListResponse {
    public String contentType;
    public DcimPowerOutletsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimPowerOutletsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DcimPowerOutletsList200ApplicationJson dcimPowerOutletsList200ApplicationJSONObject;
    public DcimPowerOutletsListResponse withDcimPowerOutletsList200ApplicationJsonObject(DcimPowerOutletsList200ApplicationJson dcimPowerOutletsList200ApplicationJSONObject) {
        this.dcimPowerOutletsList200ApplicationJSONObject = dcimPowerOutletsList200ApplicationJSONObject;
        return this;
    }
}