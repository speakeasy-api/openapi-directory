package openapisdk.models.operations;



public class GetMappingValuesKeyResponse {
    public String contentType;
    public GetMappingValuesKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetMappingValuesKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetMappingValuesKey200ApplicationJson getMappingValuesKey200ApplicationJSONObject;
    public GetMappingValuesKeyResponse withGetMappingValuesKey200ApplicationJsonObject(GetMappingValuesKey200ApplicationJson getMappingValuesKey200ApplicationJSONObject) {
        this.getMappingValuesKey200ApplicationJSONObject = getMappingValuesKey200ApplicationJSONObject;
        return this;
    }
    public String getMappingValuesKey400WildcardString;
    public GetMappingValuesKeyResponse withGetMappingValuesKey400WildcardString(String getMappingValuesKey400WildcardString) {
        this.getMappingValuesKey400WildcardString = getMappingValuesKey400WildcardString;
        return this;
    }
    public String getMappingValuesKey500WildcardString;
    public GetMappingValuesKeyResponse withGetMappingValuesKey500WildcardString(String getMappingValuesKey500WildcardString) {
        this.getMappingValuesKey500WildcardString = getMappingValuesKey500WildcardString;
        return this;
    }
}