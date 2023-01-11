package openapisdk.models.operations;



public class DcimCablesListResponse {
    public String contentType;
    public DcimCablesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimCablesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DcimCablesList200ApplicationJson dcimCablesList200ApplicationJSONObject;
    public DcimCablesListResponse withDcimCablesList200ApplicationJsonObject(DcimCablesList200ApplicationJson dcimCablesList200ApplicationJSONObject) {
        this.dcimCablesList200ApplicationJSONObject = dcimCablesList200ApplicationJSONObject;
        return this;
    }
}