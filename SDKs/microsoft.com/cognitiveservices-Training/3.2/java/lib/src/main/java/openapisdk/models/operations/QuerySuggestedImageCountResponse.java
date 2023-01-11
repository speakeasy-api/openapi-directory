package openapisdk.models.operations;



public class QuerySuggestedImageCountResponse {
    public byte[] body;
    public QuerySuggestedImageCountResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public QuerySuggestedImageCountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomVisionError customVisionError;
    public QuerySuggestedImageCountResponse withCustomVisionError(openapisdk.models.shared.CustomVisionError customVisionError) {
        this.customVisionError = customVisionError;
        return this;
    }
    public java.util.Map<String, Integer> querySuggestedImageCount200ApplicationJSONObject;
    public QuerySuggestedImageCountResponse withQuerySuggestedImageCount200ApplicationJsonObject(java.util.Map<String, Integer> querySuggestedImageCount200ApplicationJSONObject) {
        this.querySuggestedImageCount200ApplicationJSONObject = querySuggestedImageCount200ApplicationJSONObject;
        return this;
    }
    public Long statusCode;
    public QuerySuggestedImageCountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}