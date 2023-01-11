package openapisdk.models.operations;



public class ListFeatureValuesResponse {
    public String contentType;
    public ListFeatureValuesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListFeatureValuesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] listFeatureValues200ApplicationJSONStrings;
    public ListFeatureValuesResponse withListFeatureValues200ApplicationJsonStrings(String[] listFeatureValues200ApplicationJSONStrings) {
        this.listFeatureValues200ApplicationJSONStrings = listFeatureValues200ApplicationJSONStrings;
        return this;
    }
}