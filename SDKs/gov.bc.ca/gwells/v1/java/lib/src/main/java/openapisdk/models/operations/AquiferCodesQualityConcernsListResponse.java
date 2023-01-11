package openapisdk.models.operations;



public class AquiferCodesQualityConcernsListResponse {
    public String contentType;
    public AquiferCodesQualityConcernsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AquiferCodesQualityConcernsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AquiferCodesQualityConcernsList200ApplicationJson aquiferCodesQualityConcernsList200ApplicationJSONObject;
    public AquiferCodesQualityConcernsListResponse withAquiferCodesQualityConcernsList200ApplicationJsonObject(AquiferCodesQualityConcernsList200ApplicationJson aquiferCodesQualityConcernsList200ApplicationJSONObject) {
        this.aquiferCodesQualityConcernsList200ApplicationJSONObject = aquiferCodesQualityConcernsList200ApplicationJSONObject;
        return this;
    }
}