package openapisdk.models.operations;



public class GetRuleCategoryDetailsResponse {
    public String contentType;
    public GetRuleCategoryDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetRuleCategoryDetails200ApplicationJson getRuleCategoryDetails200ApplicationJSONObject;
    public GetRuleCategoryDetailsResponse withGetRuleCategoryDetails200ApplicationJsonObject(GetRuleCategoryDetails200ApplicationJson getRuleCategoryDetails200ApplicationJSONObject) {
        this.getRuleCategoryDetails200ApplicationJSONObject = getRuleCategoryDetails200ApplicationJSONObject;
        return this;
    }
    public Long statusCode;
    public GetRuleCategoryDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}