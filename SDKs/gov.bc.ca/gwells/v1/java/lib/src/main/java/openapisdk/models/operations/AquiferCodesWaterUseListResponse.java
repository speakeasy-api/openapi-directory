package openapisdk.models.operations;



public class AquiferCodesWaterUseListResponse {
    public String contentType;
    public AquiferCodesWaterUseListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AquiferCodesWaterUseListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AquiferCodesWaterUseList200ApplicationJson aquiferCodesWaterUseList200ApplicationJSONObject;
    public AquiferCodesWaterUseListResponse withAquiferCodesWaterUseList200ApplicationJsonObject(AquiferCodesWaterUseList200ApplicationJson aquiferCodesWaterUseList200ApplicationJSONObject) {
        this.aquiferCodesWaterUseList200ApplicationJSONObject = aquiferCodesWaterUseList200ApplicationJSONObject;
        return this;
    }
}