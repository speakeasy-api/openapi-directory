package openapisdk.models.operations;



public class AquiferCodesDemandListResponse {
    public String contentType;
    public AquiferCodesDemandListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AquiferCodesDemandListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AquiferCodesDemandList200ApplicationJson aquiferCodesDemandList200ApplicationJSONObject;
    public AquiferCodesDemandListResponse withAquiferCodesDemandList200ApplicationJsonObject(AquiferCodesDemandList200ApplicationJson aquiferCodesDemandList200ApplicationJSONObject) {
        this.aquiferCodesDemandList200ApplicationJSONObject = aquiferCodesDemandList200ApplicationJSONObject;
        return this;
    }
}