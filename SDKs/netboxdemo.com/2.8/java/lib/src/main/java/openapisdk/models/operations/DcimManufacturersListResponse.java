package openapisdk.models.operations;



public class DcimManufacturersListResponse {
    public String contentType;
    public DcimManufacturersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimManufacturersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DcimManufacturersList200ApplicationJson dcimManufacturersList200ApplicationJSONObject;
    public DcimManufacturersListResponse withDcimManufacturersList200ApplicationJsonObject(DcimManufacturersList200ApplicationJson dcimManufacturersList200ApplicationJSONObject) {
        this.dcimManufacturersList200ApplicationJSONObject = dcimManufacturersList200ApplicationJSONObject;
        return this;
    }
}