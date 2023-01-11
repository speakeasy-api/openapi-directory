package openapisdk.models.operations;



public class GetMarketdataSnapshotResponse {
    public String contentType;
    public GetMarketdataSnapshotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetMarketdataSnapshotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetMarketdataSnapshot200ApplicationJson[] getMarketdataSnapshot200ApplicationJSONObjects;
    public GetMarketdataSnapshotResponse withGetMarketdataSnapshot200ApplicationJsonObjects(GetMarketdataSnapshot200ApplicationJson[] getMarketdataSnapshot200ApplicationJSONObjects) {
        this.getMarketdataSnapshot200ApplicationJSONObjects = getMarketdataSnapshot200ApplicationJSONObjects;
        return this;
    }
}