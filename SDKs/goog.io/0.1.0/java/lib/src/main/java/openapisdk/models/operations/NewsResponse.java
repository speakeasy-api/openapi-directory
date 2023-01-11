package openapisdk.models.operations;



public class NewsResponse {
    public String contentType;
    public NewsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public NewsResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public News200ApplicationJson news200ApplicationJSONObject;
    public NewsResponse withNews200ApplicationJsonObject(News200ApplicationJson news200ApplicationJSONObject) {
        this.news200ApplicationJSONObject = news200ApplicationJSONObject;
        return this;
    }
    public Long statusCode;
    public NewsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}