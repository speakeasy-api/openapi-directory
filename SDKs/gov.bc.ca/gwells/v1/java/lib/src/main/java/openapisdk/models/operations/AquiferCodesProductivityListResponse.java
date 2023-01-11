package openapisdk.models.operations;



public class AquiferCodesProductivityListResponse {
    public String contentType;
    public AquiferCodesProductivityListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AquiferCodesProductivityListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AquiferCodesProductivityList200ApplicationJson aquiferCodesProductivityList200ApplicationJSONObject;
    public AquiferCodesProductivityListResponse withAquiferCodesProductivityList200ApplicationJsonObject(AquiferCodesProductivityList200ApplicationJson aquiferCodesProductivityList200ApplicationJSONObject) {
        this.aquiferCodesProductivityList200ApplicationJSONObject = aquiferCodesProductivityList200ApplicationJSONObject;
        return this;
    }
}