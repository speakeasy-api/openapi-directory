package openapisdk.models.operations;



public class SearchProductsResponse {
    public String contentType;
    public SearchProductsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SearchProductsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public SearchProducts200ApplicationJson searchProducts200ApplicationJSONObject;
    public SearchProductsResponse withSearchProducts200ApplicationJsonObject(SearchProducts200ApplicationJson searchProducts200ApplicationJSONObject) {
        this.searchProducts200ApplicationJSONObject = searchProducts200ApplicationJSONObject;
        return this;
    }
}