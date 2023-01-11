package openapisdk.models.operations;



public class AquifersListResponse {
    public String contentType;
    public AquifersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AquifersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AquifersList200ApplicationJson aquifersList200ApplicationJSONObject;
    public AquifersListResponse withAquifersList200ApplicationJsonObject(AquifersList200ApplicationJson aquifersList200ApplicationJSONObject) {
        this.aquifersList200ApplicationJSONObject = aquifersList200ApplicationJSONObject;
        return this;
    }
}