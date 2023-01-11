package openapisdk.models.operations;



public class SearchProductsCodesResponse {
    public String contentType;
    public SearchProductsCodesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SearchProductsCodesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public SearchProductsCodes200ApplicationJson searchProductsCodes200ApplicationJSONObject;
    public SearchProductsCodesResponse withSearchProductsCodes200ApplicationJsonObject(SearchProductsCodes200ApplicationJson searchProductsCodes200ApplicationJSONObject) {
        this.searchProductsCodes200ApplicationJSONObject = searchProductsCodes200ApplicationJSONObject;
        return this;
    }
}