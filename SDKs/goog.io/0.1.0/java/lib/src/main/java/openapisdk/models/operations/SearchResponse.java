package openapisdk.models.operations;



public class SearchResponse {
    public String contentType;
    public SearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public SearchResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Search200ApplicationJson search200ApplicationJSONObject;
    public SearchResponse withSearch200ApplicationJsonObject(Search200ApplicationJson search200ApplicationJSONObject) {
        this.search200ApplicationJSONObject = search200ApplicationJSONObject;
        return this;
    }
    public Long statusCode;
    public SearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}