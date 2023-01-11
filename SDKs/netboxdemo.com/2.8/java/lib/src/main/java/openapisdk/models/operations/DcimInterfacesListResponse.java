package openapisdk.models.operations;



public class DcimInterfacesListResponse {
    public String contentType;
    public DcimInterfacesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimInterfacesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DcimInterfacesList200ApplicationJson dcimInterfacesList200ApplicationJSONObject;
    public DcimInterfacesListResponse withDcimInterfacesList200ApplicationJsonObject(DcimInterfacesList200ApplicationJson dcimInterfacesList200ApplicationJSONObject) {
        this.dcimInterfacesList200ApplicationJSONObject = dcimInterfacesList200ApplicationJSONObject;
        return this;
    }
}