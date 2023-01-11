package openapisdk.models.operations;



public class GetKvPairsResponse {
    public String contentType;
    public GetKvPairsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetKvPairsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetKvPairs200ApplicationJson getKvPairs200ApplicationJSONObject;
    public GetKvPairsResponse withGetKvPairs200ApplicationJsonObject(GetKvPairs200ApplicationJson getKvPairs200ApplicationJSONObject) {
        this.getKvPairs200ApplicationJSONObject = getKvPairs200ApplicationJSONObject;
        return this;
    }
}