package openapisdk.models.operations;



public class GenerateDeviceCameraSnapshotResponse {
    public String contentType;
    public GenerateDeviceCameraSnapshotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GenerateDeviceCameraSnapshotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> generateDeviceCameraSnapshot202ApplicationJSONObject;
    public GenerateDeviceCameraSnapshotResponse withGenerateDeviceCameraSnapshot202ApplicationJsonObject(java.util.Map<String, Object> generateDeviceCameraSnapshot202ApplicationJSONObject) {
        this.generateDeviceCameraSnapshot202ApplicationJSONObject = generateDeviceCameraSnapshot202ApplicationJSONObject;
        return this;
    }
}