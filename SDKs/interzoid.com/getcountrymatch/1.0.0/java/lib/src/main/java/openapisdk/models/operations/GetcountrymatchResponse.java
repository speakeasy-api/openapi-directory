package openapisdk.models.operations;



public class GetcountrymatchResponse {
    public String contentType;
    public GetcountrymatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetcountrymatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Getcountrymatch200ApplicationJson getcountrymatch200ApplicationJSONObject;
    public GetcountrymatchResponse withGetcountrymatch200ApplicationJsonObject(Getcountrymatch200ApplicationJson getcountrymatch200ApplicationJSONObject) {
        this.getcountrymatch200ApplicationJSONObject = getcountrymatch200ApplicationJSONObject;
        return this;
    }
}