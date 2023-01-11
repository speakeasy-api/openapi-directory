package openapisdk.models.operations;



public class PostVolumesResponse {
    public String contentType;
    public PostVolumesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostVolumesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostVolumes201ApplicationJson postVolumes201ApplicationJSONObject;
    public PostVolumesResponse withPostVolumes201ApplicationJsonObject(PostVolumes201ApplicationJson postVolumes201ApplicationJSONObject) {
        this.postVolumes201ApplicationJSONObject = postVolumes201ApplicationJSONObject;
        return this;
    }
}