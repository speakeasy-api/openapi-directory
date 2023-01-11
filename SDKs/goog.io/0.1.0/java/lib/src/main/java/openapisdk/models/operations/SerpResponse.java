package openapisdk.models.operations;



public class SerpResponse {
    public String contentType;
    public SerpResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public SerpResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public SerpResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Serp200ApplicationJson serp200ApplicationJSONObject;
    public SerpResponse withSerp200ApplicationJsonObject(Serp200ApplicationJson serp200ApplicationJSONObject) {
        this.serp200ApplicationJSONObject = serp200ApplicationJSONObject;
        return this;
    }
}