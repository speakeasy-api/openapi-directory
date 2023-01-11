package openapisdk.models.operations;



public class AquiferCodesMaterialsListResponse {
    public String contentType;
    public AquiferCodesMaterialsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AquiferCodesMaterialsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AquiferCodesMaterialsList200ApplicationJson aquiferCodesMaterialsList200ApplicationJSONObject;
    public AquiferCodesMaterialsListResponse withAquiferCodesMaterialsList200ApplicationJsonObject(AquiferCodesMaterialsList200ApplicationJson aquiferCodesMaterialsList200ApplicationJSONObject) {
        this.aquiferCodesMaterialsList200ApplicationJSONObject = aquiferCodesMaterialsList200ApplicationJSONObject;
        return this;
    }
}