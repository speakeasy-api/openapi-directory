package openapisdk.models.operations;



public class GetPresencesResponse {
    public String contentType;
    public GetPresencesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPresencesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetPresences200ApplicationJson getPresences200ApplicationJSONObject;
    public GetPresencesResponse withGetPresences200ApplicationJsonObject(GetPresences200ApplicationJson getPresences200ApplicationJSONObject) {
        this.getPresences200ApplicationJSONObject = getPresences200ApplicationJSONObject;
        return this;
    }
}