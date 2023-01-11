package openapisdk.models.operations;



public class ConvertcurrencyResponse {
    public String contentType;
    public ConvertcurrencyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ConvertcurrencyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Convertcurrency200ApplicationJson convertcurrency200ApplicationJSONObject;
    public ConvertcurrencyResponse withConvertcurrency200ApplicationJsonObject(Convertcurrency200ApplicationJson convertcurrency200ApplicationJSONObject) {
        this.convertcurrency200ApplicationJSONObject = convertcurrency200ApplicationJSONObject;
        return this;
    }
}