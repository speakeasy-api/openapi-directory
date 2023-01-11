package openapisdk.models.operations;



public class TranslateResponse {
    public String contentType;
    public TranslateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TranslateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Translate200ApplicationJson translate200ApplicationJSONObject;
    public TranslateResponse withTranslate200ApplicationJsonObject(Translate200ApplicationJson translate200ApplicationJSONObject) {
        this.translate200ApplicationJSONObject = translate200ApplicationJSONObject;
        return this;
    }
}