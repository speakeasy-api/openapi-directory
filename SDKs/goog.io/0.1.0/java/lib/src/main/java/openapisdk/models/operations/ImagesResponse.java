package openapisdk.models.operations;



public class ImagesResponse {
    public String contentType;
    public ImagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public ImagesResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Images200ApplicationJson images200ApplicationJSONObject;
    public ImagesResponse withImages200ApplicationJsonObject(Images200ApplicationJson images200ApplicationJSONObject) {
        this.images200ApplicationJSONObject = images200ApplicationJSONObject;
        return this;
    }
    public Long statusCode;
    public ImagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}