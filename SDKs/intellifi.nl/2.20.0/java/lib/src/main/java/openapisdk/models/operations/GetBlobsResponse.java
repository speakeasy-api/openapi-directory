package openapisdk.models.operations;



public class GetBlobsResponse {
    public String contentType;
    public GetBlobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetBlobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetBlobs200ApplicationJson getBlobs200ApplicationJSONObject;
    public GetBlobsResponse withGetBlobs200ApplicationJsonObject(GetBlobs200ApplicationJson getBlobs200ApplicationJSONObject) {
        this.getBlobs200ApplicationJSONObject = getBlobs200ApplicationJSONObject;
        return this;
    }
}