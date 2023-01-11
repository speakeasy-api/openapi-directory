package openapisdk.models.operations;



public class DrillersFilesListResponse {
    public String contentType;
    public DrillersFilesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DrillersFilesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DrillersFilesList200ApplicationJson drillersFilesList200ApplicationJSONObject;
    public DrillersFilesListResponse withDrillersFilesList200ApplicationJsonObject(DrillersFilesList200ApplicationJson drillersFilesList200ApplicationJSONObject) {
        this.drillersFilesList200ApplicationJSONObject = drillersFilesList200ApplicationJSONObject;
        return this;
    }
}