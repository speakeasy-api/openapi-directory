package openapisdk.models.operations;



public class GetcitymatchResponse {
    public String contentType;
    public GetcitymatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetcitymatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Getcitymatch200ApplicationJson getcitymatch200ApplicationJSONObject;
    public GetcitymatchResponse withGetcitymatch200ApplicationJsonObject(Getcitymatch200ApplicationJson getcitymatch200ApplicationJSONObject) {
        this.getcitymatch200ApplicationJSONObject = getcitymatch200ApplicationJSONObject;
        return this;
    }
}