package openapisdk.models.operations;



public class GetcurrencyrateResponse {
    public String contentType;
    public GetcurrencyrateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetcurrencyrateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Getcurrencyrate200ApplicationJson getcurrencyrate200ApplicationJSONObject;
    public GetcurrencyrateResponse withGetcurrencyrate200ApplicationJsonObject(Getcurrencyrate200ApplicationJson getcurrencyrate200ApplicationJSONObject) {
        this.getcurrencyrate200ApplicationJSONObject = getcurrencyrate200ApplicationJSONObject;
        return this;
    }
}