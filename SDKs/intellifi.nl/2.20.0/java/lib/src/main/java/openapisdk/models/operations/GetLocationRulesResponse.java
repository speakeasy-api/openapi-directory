package openapisdk.models.operations;



public class GetLocationRulesResponse {
    public String contentType;
    public GetLocationRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetLocationRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetLocationRules200ApplicationJson getLocationRules200ApplicationJSONObject;
    public GetLocationRulesResponse withGetLocationRules200ApplicationJsonObject(GetLocationRules200ApplicationJson getLocationRules200ApplicationJSONObject) {
        this.getLocationRules200ApplicationJSONObject = getLocationRules200ApplicationJSONObject;
        return this;
    }
}