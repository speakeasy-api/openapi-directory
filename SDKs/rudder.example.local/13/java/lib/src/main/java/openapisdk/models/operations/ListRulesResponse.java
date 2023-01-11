package openapisdk.models.operations;



public class ListRulesResponse {
    public String contentType;
    public ListRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListRules200ApplicationJson listRules200ApplicationJSONObject;
    public ListRulesResponse withListRules200ApplicationJsonObject(ListRules200ApplicationJson listRules200ApplicationJSONObject) {
        this.listRules200ApplicationJSONObject = listRules200ApplicationJSONObject;
        return this;
    }
}