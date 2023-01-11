package openapisdk.models.operations;



public class AquiferCodesSubtypesListResponse {
    public String contentType;
    public AquiferCodesSubtypesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AquiferCodesSubtypesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AquiferCodesSubtypesList200ApplicationJson aquiferCodesSubtypesList200ApplicationJSONObject;
    public AquiferCodesSubtypesListResponse withAquiferCodesSubtypesList200ApplicationJsonObject(AquiferCodesSubtypesList200ApplicationJson aquiferCodesSubtypesList200ApplicationJSONObject) {
        this.aquiferCodesSubtypesList200ApplicationJSONObject = aquiferCodesSubtypesList200ApplicationJSONObject;
        return this;
    }
}